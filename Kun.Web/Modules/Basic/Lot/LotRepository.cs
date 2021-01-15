
namespace Kun.Basic.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.LotRow;

    public class LotRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public RetrieveResponse<MyRow> GetLot(IUnitOfWork uow, Guid? materialId)
        {
            var prefix = DateTime.Now.ToString("yyyyMMdd");
            var field = MyRow.Fields;
            var max = uow.Connection.Query<string>(new SqlQuery()
               .From(field)
               .Select(Sql.Max(field.Code.Expression))
              .Where(
                   field.Code.StartsWith(prefix) && field.MaterialId == (Guid)materialId
                   )
               ).FirstOrDefault();

            long l;
            var serial = max == null ||
              !long.TryParse(max.Substring(prefix.Length), out l) ? 1 : l + 1;
            var newLot = prefix + serial.ToString().PadLeft(4, '0');
            var myRow = new MyRow
            {
                Id = Guid.NewGuid(),
                Code = newLot,
                MaterialId = materialId
            };
            Create(uow, new SaveRequest<MyRow>
            {
                Entity = myRow
            });
            return new RetrieveResponse<MyRow> { Entity = myRow };
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