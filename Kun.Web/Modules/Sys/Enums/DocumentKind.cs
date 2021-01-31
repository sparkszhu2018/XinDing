using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Sys.Enum
{

    [EnumKey("Sys.DocumentKind")]
    public enum DocumentKind : int
    {
       
        [Description("采购入库单")]
        InStockBill = 10,
        [Description("维保单")]
        MaintBill = 20,
        [Description("销售订单")]
        SaleOrderBill = 30,
        [Description("移库单")]
        ChangeStockBill = 40,

        [Description("项目领料单")]
        ProjectMaterialsBill = 60,

        [Description("物料主数据")]
        Material = 1,
        [Description("客户主数据")]
        Customer = 2,
        [Description("供应商主数据")]
        Supplier = 3,


        [Description("项目")]
        ProjectInfo = 50,
        [Description("项目商品")]
        ProjectMaterials = 51,
        [Description("项目服务")]
        ProjectService = 52,
        [Description("项目商务")]
        ProjectBiz = 53,

    }
     

}