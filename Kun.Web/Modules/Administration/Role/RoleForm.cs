
namespace Kun.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow), CheckNames = true)]
    public class RoleForm
    {
        public String RoleName { get; set; }
        [Placeholder("if set, used as a special permission key like \"Role:RoleKey\"")]
        public String RoleKey { get; set; }
    }
}