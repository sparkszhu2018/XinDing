using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kun.Finance.Endpoints
{
    public class InvoiceNoRequest: ServiceRequest
    {
        public string InvoiceNo { get; set; }  
    }
}
