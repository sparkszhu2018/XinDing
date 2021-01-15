
namespace Kun.Basic.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.MaterialRepository;
    using MyRow = Entities.MaterialRow;
    using Serenity.Web;
    using System;
    using OfficeOpenXml;
    using System.IO;
    using System.Collections.Generic;
    using Kun.Basic.Repositories;
    using Kun.Basic.Entities;

    [Route("Services/Basic/Material/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MaterialController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }



        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        { 
            //var userid = int.Parse(Authorization.UserId); 

            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var p = MyRow.Fields;
            var response = new ExcelImportResponse();
            var list = new List<MyRow>();
            response.ErrorList = new List<string>();
            var worksheet = ep.Workbook.Worksheets[0];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    //姓名 身份证号码   联系电话 家庭住址    所在部门 公司职位    培训类型 培训对象
                    var code = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    if (code.IsTrimmedEmpty())
                        continue;
                    var name = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    var unit = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    var groupName = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");

                    if (string.IsNullOrWhiteSpace(name) )
                    {
                        response.ErrorList.Add("错误行" + row + ": 请输入物料名称!");
                    }
                    else if (string.IsNullOrWhiteSpace(unit))
                    {
                        response.ErrorList.Add("错误行" + row + ": 请输入物料单位!");
                    }
                    else if (string.IsNullOrWhiteSpace(groupName))
                    {
                        response.ErrorList.Add("错误行" + row + ": 请输入物料组!");
                    }
                    var unitRow = uow.Connection.TrySingle<UnitRow>(q => 
                        q.SelectTableFields().Where(UnitRow.Fields.IsActive == 1 && UnitRow.Fields.Code == unit));
                    if (unitRow == null)
                    {
                        response.ErrorList.Add("错误行" + row + ": 单位编号不存在!");
                    }
                    var groupRow = uow.Connection.TrySingle<MaterialGroupRow>(q => q
                       .SelectTableFields()
                       .Where(MaterialGroupRow.Fields.IsActive == 1 && MaterialGroupRow.Fields.Name == groupName)
                       );
                    if (groupRow == null)
                    {
                        response.ErrorList.Add("错误行" + row + ": 物料组名称不存在!");
                    }

                    var matRow = uow.Connection.TrySingle<MaterialRow>(q => q
                       .SelectTableFields()
                       .Where(MaterialRow.Fields.IsActive == 1 && MaterialRow.Fields.Name == name)
                       );
                    if (matRow != null)
                    {
                        response.ErrorList.Add("错误行" + row + $": {name} 已存在，不得重名!");
                    }
                    if (response.ErrorList.Count == 0)
                    {
                        list.Add(new MyRow
                        {
                            Name = name,
                            Code = code,
                            UnitId = unitRow.Id,
                            GroupId = groupRow.Id,
                            IsBatch = true,
                            IsVirtual = false
                        }) ;
                    }
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("错误行" + row + ": " + ex.Message);
                }
            }
            if (response.ErrorList.Count == 0)
            {
                foreach (var m in list)
                {
                    response.Inserted = response.Inserted + 1;
                    new MyRepository().Create(uow, new SaveRequest<MyRow>
                    {
                        Entity = m
                    });
                }
            }
            return response;
        }


    }
}
