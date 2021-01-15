
namespace Kun.Administration
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Kun.Administration.Entities;
    using Kun.Administration.Repositories;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class UserDataScriptController : Controller
    {
        /// <summary>
        /// This declares a dynamic script with key 'UserData' that will be available from client side.
        /// We don't cache it at dynamic script manager, because dynamic scripts are cached globally,
        /// similar to static variables, not per user.
        /// </summary>
        [NonAction, DataScript("UserData", CacheDuration = -1)]
        public ScriptUserDefinition GetUserData()
        {
            var result = new ScriptUserDefinition();
            var user = Authorization.UserDefinition as UserDefinition;

            if (user == null)
            {
                result.Permissions = new Dictionary<string, bool>();
                return result;
            }

            result.Username = user.Username;
            result.DisplayName = user.DisplayName;
            result.IsAdmin = user.Username == "admin";

            result.Permissions = TwoLevelCache.GetLocalStoreOnly("ScriptUserPermissions:" + user.Id, TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                {
                    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                    var permissionsUsedFromScript = TwoLevelCache.GetLocalStoreOnly("PermissionsUsedFromScript",
                        TimeSpan.Zero, RoleRow.Fields.GenerationKey, () =>
                        {
                            return new UserPermissionRepository()
                                .ListPermissionKeys(includeRoles: true)
                                .Entities.Where(permissionKey =>
                                {
                                    // this sends permission information for all permission keys to client side.
                                    // if you don't need all of them to be available from script, filter them here.
                                    // this is recommended for security / performance reasons...
                                    return true;
                                }).ToArray();
                        });

                    foreach (var permissionKey in permissionsUsedFromScript)
                    {
                        if (Authorization.HasPermission(permissionKey))
                            permissions[permissionKey] = true;
                    }

                    return permissions;
                });

            return result;
        }
    }
}
