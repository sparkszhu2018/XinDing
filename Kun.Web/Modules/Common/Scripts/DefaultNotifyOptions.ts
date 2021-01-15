namespace M {
    export let defaultNotifyOptions: ToastrOptions = {
        timeOut: 3000,
        showDuration: 250,
        hideDuration: 500,
        extendedTimeOut: 500,
        positionClass: 'toast-bottom-right'
    }

    function getToastrOptions(options: ToastrOptions) {
        options = $.extend<ToastrOptions>({}, defaultNotifyOptions, options);
        return options;
    }

    export function notifyWarning(message: string, title?: string, options?: ToastrOptions): void {
        toastr.warning(message, title, getToastrOptions(options));
    }

    export function notifySuccess(message: string, title?: string, options?: ToastrOptions): void {
        toastr.success(message, title, getToastrOptions(options));
    }

    export function notifyInfo(message: string, title?: string, options?: ToastrOptions): void {
        toastr.info(message, title, getToastrOptions(options));
    }

    export function notifyError(message: string, title?: string, options?: ToastrOptions): void {
        toastr.error(message, title, getToastrOptions(options));
    }

}
