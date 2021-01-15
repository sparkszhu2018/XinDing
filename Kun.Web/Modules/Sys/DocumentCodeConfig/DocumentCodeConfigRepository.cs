
namespace Kun.Sys.Repositories
{
    using Kun.Sys.Entities;
    using Kun.Sys.Enum;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.DocumentCodeConfigRow;

    public class DocumentCodeConfigRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public String GetDocumentCodePrefix(IDbConnection connection, DocumentKind documentKind)
        {
            var fld = DocumentCodeConfigRow.Fields;
            var config = connection.TrySingle<DocumentCodeConfigRow>(fld.IsActive == 1 && fld.DocumentKind == (Int16)documentKind);
            string prefix = "";
            if (config != null)
            {
                prefix = config.DocumentCodePrefix;
            }
            return prefix;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                if (IsCreate)
                {
                    Row.Id = Row.Id ?? Guid.NewGuid();  
                }
            } 
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}