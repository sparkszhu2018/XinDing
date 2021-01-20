
namespace Kun.Ops
{
    using Kun.Ops.Entities;
    using Kun.Ops.Repositories;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;

    [Report("Ops.Maintenance")]
    [ReportDesign(MVC.Views.Ops.Maintenance.Print.MaintenanceReport)]
    public class MaintenanceReport : IReport, ICustomizeHtmlToPdf
    {
        public Guid Id { get; set; }

        public object GetData()
        {
            var connection = SqlConnections.NewFor<MaintenanceRow>();
            var row = new MaintenanceRepository().Retrieve(connection, new Serenity.Services.RetrieveRequest { EntityId = Id,
                IncludeColumns = new HashSet<string> { "TypeName" }
            }).Entity;
            return row;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
            // options.Landscape = true;
        }
    } 

}