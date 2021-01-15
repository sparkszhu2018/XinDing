/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../Common/UserPreference/UserPreferenceStorage.ts" />

namespace Kun.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Kun');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
    Serenity.DataGrid.defaultPersistanceStorage = new Common.UserPreferenceStorage();


    Q.Router.enabled = false;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    Serenity.setupUIOverrides();

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;

    $(() => {
        // let demo page use its own settings for idle timeout
        if (window.location.pathname.indexOf('Samples/IdleTimeout') > 0)
            return;

        var meta = $('meta[name=username]');
        if ((meta.length && meta.attr('content')) ||
            (!meta.length && Q.Authorization.isLoggedIn)) {

            new Serenity.IdleTimeout({
                activityTimeout: 4 * 60 * 60, // 4小时
                warningDuration: 2 * 60
            });
        }
    });
}