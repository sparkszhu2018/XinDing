using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Finance.Endpoints
{
    public class InvoiceNoResponse : ServiceResponse
    {
        public string InvoiceNo { get; set; }
        public decimal? InvoiceAmount { get; set; }
        public decimal? ReceiptAmount { get; set; }
        public decimal? UnReceiptAmount { get; set; }
    }
}
