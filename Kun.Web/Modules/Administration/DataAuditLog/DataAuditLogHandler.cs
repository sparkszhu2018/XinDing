using Serenity;
using Serenity.Data;
using Kun.Administration.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection;

namespace Kun.Administration.Behaviors
{
    public class DataAuditLogHandler<TRow> : IDataAuditLogHandler
        where TRow : Row, IIdRow, new()
    {
        private static string logConnectionKey;
        private static StaticInfo info;

        private class StaticInfo
        {
            public TRow rowInstance;
        }

        static DataAuditLogHandler()
        {
            SchemaChangeSource.Observers += (connectionKey, table) =>
            {
                if (connectionKey == logConnectionKey)
                    info = null;
            };
        }

        static StaticInfo EnsureInfo()
        {
            var newInfo = info;
            if (newInfo != null)
                return newInfo;

            var auditLogAttr = typeof(TRow).GetCustomAttribute<DataAuditLogAttribute>(false);

            newInfo = new StaticInfo();
            newInfo.rowInstance = new TRow();

            logConnectionKey = newInfo.rowInstance.GetFields().ConnectionKey;

            info = newInfo;
            return newInfo;
        }

        public static IEnumerable<Field> EnumerateCapturedFields()
        {
            var info = EnsureInfo();
            foreach (var logField in info.rowInstance.GetFields())
            {
                if (!logField.IsTableField())
                    continue;

                yield return logField;
            }
        }

        private string SerializeValue(object value)
        {
            if (value == null)
                return null;

            if (value is string)
                return value as string;

            if (value is DateTime)
            {
                var date = (DateTime)value;
                if (date.Date == date)
                    return date.ToString("yyyy-MM-dd");
                else if (date.Kind == DateTimeKind.Utc)
                    return date.ToString("yyyy-MM-ddTHH:mm:ss.fffZ");
                else
                    return date.ToString("yyyy-MM-ddTHH:mm:ss.fff");
            }

            return Convert.ToString(value, CultureInfo.InvariantCulture);
        }

        public void Log(IUnitOfWork uow, TRow old, TRow row, object userId)
        {
            if (old == null && row == null)
                throw new ArgumentNullException("old");

            var now = DateTime.UtcNow;
            var info = EnsureInfo();

            var logRow = new DataAuditLogRow();
            var ckRow = (old ?? row).GetType().GetCustomAttribute<ConnectionKeyAttribute>();
            var ckLog = logRow.GetType().GetCustomAttribute<ConnectionKeyAttribute>();
            var sameConnection = ckRow != null && ckLog != null && ckRow.Value == ckLog.Value;
            var queue = new Queue<DataAuditLogRow>();

            logRow.TrackAssignments = true;
            logRow.UserId = userId == null ? (int?)null : Convert.ToInt32(userId, CultureInfo.InvariantCulture);
            logRow.LogType = old == null ? DataAuditLogType.Insert : (row == null ? DataAuditLogType.Delete : DataAuditLogType.Update);
            logRow.Tablename = (old ?? row).Table;
            var idField = (Field)(((IIdRow)(row ?? old)).IdField);
            var idValue = idField.AsObject(row ?? old);
            logRow.RecordId = idValue == null ? null : Convert.ToString(idValue, CultureInfo.InvariantCulture);
            logRow.LogDate = now;

            if (logRow.LogType == DataAuditLogType.Delete)
            {
                if (sameConnection)
                    uow.Connection.Insert(logRow);
                else
                    queue.Enqueue(logRow);
            }
            else if (logRow.LogType == DataAuditLogType.Insert)
            {
                foreach (var field in EnumerateCapturedFields())
                {
                    if (row.IsAssigned(field) &&
                        !field.IsNull(row))
                    {
                        var clone = logRow.Clone();
                        clone.FieldName = field.Name;
                        clone.NewValue = SerializeValue(field.AsObject(row));

                        if (sameConnection)
                            uow.Connection.Insert(clone);
                        else
                            queue.Enqueue(clone);
                    }
                }
            }
            else if (logRow.LogType == DataAuditLogType.Update)
            {
                foreach (var field in EnumerateCapturedFields())
                {
                    if (row.IsAssigned(field) && field.IndexCompare(old, row) != 0)
                    {
                        var clone = logRow.Clone();
                        clone.FieldName = field.Name;
                        clone.OldValue = SerializeValue(field.AsObject(old));
                        clone.NewValue = SerializeValue(field.AsObject(row));
                        if (sameConnection)
                            uow.Connection.Insert(clone);
                        else
                            queue.Enqueue(clone);
                    }
                }
            }
            else
                throw new InvalidOperationException("Audit Log Type?: " + logRow.LogType);

            if (queue.Count > 0)
            {
                uow.OnCommit += () =>
                {
                    try
                    {
                        using (var connection = SqlConnections.NewFor<DataAuditLogRow>())
                            while (queue.Count > 0)
                                connection.Insert(queue.Dequeue());
                    }
                    catch (Exception ex)
                    {
                        ex.Log();
                    }
                };
            }
        }

        void IDataAuditLogHandler.Log(IUnitOfWork uow, Row old, Row row, object userId)
        {
            Log(uow, (TRow)old, (TRow)row, userId);
        }
    }
}