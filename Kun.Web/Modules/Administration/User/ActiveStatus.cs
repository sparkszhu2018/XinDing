namespace Kun.Administration.Entities
{
    using Serenity.ComponentModel;
    using System.ComponentModel;
    [EnumKey("Commom.ActiveStatus")]
    public enum ActiveStatus: int
    {
        [Description("Deleted")]
        Deleted = -1,
        [Description("Inactive")]
        Inactive = 0,
        [Description("Active")]
        Active = 1
    }
}
