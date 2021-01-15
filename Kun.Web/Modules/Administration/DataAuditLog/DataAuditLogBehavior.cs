using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Reflection;

namespace Kun.Administration.Behaviors
{
    public class DataAuditLogBehavior : BaseSaveDeleteBehavior, IImplicitBehavior
    {
        private IDataAuditLogHandler auditLogHandler;

        public bool ActivateFor(Row row)
        {
            if (row.GetType().GetCustomAttribute<DataAuditLogAttribute>() == null)
                return false;

            if (!(row is IIdRow))
                return false;

            auditLogHandler = (IDataAuditLogHandler)Activator.CreateInstance(
                typeof(DataAuditLogHandler<>).MakeGenericType(row.GetType()));

            return true;
        }

        public override void OnAudit(IDeleteRequestHandler handler)
        {
            if (handler.Row == null || auditLogHandler == null)
                return;

            Row newRow = null;

            auditLogHandler.Log(handler.UnitOfWork, handler.Row, newRow, Authorization.UserId);
        }

        public override void OnAudit(ISaveRequestHandler handler)
        {
            if (handler.Row == null || auditLogHandler == null)
                return;

            if (handler.IsCreate)
            {
                auditLogHandler.Log(handler.UnitOfWork,
                    null, handler.Row, Authorization.UserId);

                return;
            }

            bool anyChanged = false;
            foreach (var field in handler.Row.GetTableFields())
            {
                if (field.IndexCompare(handler.Old, handler.Row) != 0)
                {
                    anyChanged = true;
                    break;
                }
            }

            if (anyChanged)
                auditLogHandler.Log(handler.UnitOfWork,
                    handler.Old, handler.Row, Authorization.UserId);
        }
    }
}