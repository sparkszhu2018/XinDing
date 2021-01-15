using FluentMigrator;

namespace Kun.Migrations.DefaultDB
{
    [Migration(20180703_111000)]
    public class DefaultDB_20180703_111000_RoleKey : Migration
    {
        public override void Up()
        {
            Alter.Table("Roles")
                .AddColumn("RoleKey").AsString(100).Nullable();
        }

        public override void Down()
        {
        }
    }
}