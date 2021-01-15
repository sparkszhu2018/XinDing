

namespace Kun.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Kun.Administration.Entities;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.RoleRow;

    public class RoleRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void InvalidateCacheOnCommit()
            {
                base.InvalidateCacheOnCommit();

                TwoLevelCache.ExpireGroupItems(UserPermissionRow.Fields.GenerationKey);
                TwoLevelCache.ExpireGroupItems(RolePermissionRow.Fields.GenerationKey);
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }

        public static Dictionary<int, MyRow> RoleById
        {
            get
            {
                return TwoLevelCache.GetLocalStoreOnly("RoleById", TimeSpan.Zero,
                    fld.GenerationKey, () =>
                    {
                        using (var connection = SqlConnections.NewFor<MyRow>())
                            return connection.List<MyRow>().ToDictionary(x => x.RoleId.Value);
                    });
            }
        }
    }
}