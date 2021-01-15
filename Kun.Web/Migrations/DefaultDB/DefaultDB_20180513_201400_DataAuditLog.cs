using FluentMigrator;

namespace Kun.Migrations.DefaultDB
{
    [Migration(20180513201400)]
    public class DefaultDB_20180513_201400_DataAuditLog : Migration
    {
        public override void Up()
        {
            this.CreateTableWithId32("DataAuditLog", "LogId", s => s
                .WithColumn("LogType").AsInt16().NotNullable()
                .WithColumn("LogDate").AsDateTime().NotNullable()
                .WithColumn("UserId").AsInt32().Nullable()
                    .ForeignKey("FK_AuditLog_UserId", "Users", "UserId")
                .WithColumn("TableName").AsString(50).NotNullable()
                .WithColumn("RecordId").AsString(50).NotNullable()
                .WithColumn("FieldName").AsString(50).Nullable()
                .WithColumn("OldValue").AsString(int.MaxValue).Nullable()
                .WithColumn("NewValue").AsString(int.MaxValue).Nullable());
        }

        public override void Down()
        {
        }
    }
}