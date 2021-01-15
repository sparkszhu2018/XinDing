/// <reference types="react" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Serenity.EmailClient {
    const folderIcons: {
        "inbox": string;
        "sent": string;
        "drafts": string;
        "junk": string;
        "trash": string;
    };
    interface MailboxFolderLinkProps {
        folder: EmailFolder;
        activeFolder: string;
    }
    function mailboxFolderName(folder: EmailFolder): string;
    class MailboxFolderLink extends React.Component<MailboxFolderLinkProps> {
        render(): React.ReactNode;
    }
}
declare namespace Serenity.EmailClient {
    function mailboxFolderSelectPadding(folder: EmailFolder): string;
    interface MailboxToolbarProps {
        onCheckAll: () => void;
        onToggleSeen: () => void;
        allChecked: boolean;
        onDelete: () => void;
        onRefresh: () => void;
        onMoveToFolder: (folder: string) => void;
        folder: string;
        flatFolderList: EmailFolder[];
        page: number;
        pageSize: number;
        messageCount: number;
        onChangePage: (page: number) => void;
    }
    class MailboxToolbar extends React.Component<MailboxToolbarProps, {}> {
        handleMoveToFolder(e: React.ChangeEvent<HTMLSelectElement>): void;
        render(): JSX.Element;
    }
}
declare namespace Serenity.EmailClient {
    namespace EmailService {
        function Login(request: EmailLoginRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Signout(request: ServiceRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UnreadCount(request: EmailUnreadCountRequest, onSuccess?: (response: EmailUnreadCountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Suggest(request: EmailSuggestRequest, onSuccess?: (response: EmailSuggestResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reply(request: EmailReplyRequest, onSuccess?: (response: EmailReplyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Compose(request: EmailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteMessages(request: EmailDeleteRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ToggleSeen(request: EmailToggleSeenRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Move(request: EmailMoveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListMessages(request: EmailListRequest, onSuccess?: (response: Serenity.ListResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListFolders(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<EmailFolder>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveMessage(request: EmailRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
    }
}
declare namespace Serenity.EmailClient {
    class MailboxLoginProps {
        onLogin: () => void;
    }
    class MailboxLoginView extends React.Component<MailboxLoginProps> {
        private editorRefs;
        private loadQuickSettings;
        handleQuickSettingChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
        componentDidMount(): void;
        login(): void;
        private form;
        render(): React.ReactNode;
    }
}
declare namespace Serenity.EmailClient {
    interface HtmlIFrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
        contents: string;
    }
    class HtmlIFrame extends React.Component<HtmlIFrameProps> {
        private iframe;
        updateContents(): void;
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: HtmlIFrameProps): void;
        render(): JSX.Element;
    }
}
declare namespace Serenity.EmailClient {
    interface MailViewerProps {
        folder: string;
        flatFolderList: EmailFolder[];
        uid: number;
        onClose: () => void;
    }
    interface MailViewerState {
        message: EmailItem;
    }
    class MailViewer extends React.Component<MailViewerProps, MailViewerState> {
        private loadTimeout;
        constructor(props: MailViewerProps);
        componentDidMount(): void;
        componentWillReceiveProps(newProps: MailViewerProps): void;
        back(): void;
        loadMessage(folder: string, uid: number): PromiseLike<any>;
        load(): void;
        deleteMessage(): void;
        moveToFolder(target: string): void;
        getDateText(): string;
        reply(all?: boolean, forward?: boolean): void;
        render(): JSX.Element;
    }
}
declare namespace Serenity.EmailClient {
    interface MailboxItem extends EmailItem {
        __checked?: boolean;
    }
    interface MailboxState {
        showLogin: boolean;
        folder: string;
        folders: any[];
        messageCount: number;
        messages: MailboxItem[];
        page: number;
        pageSize: number;
        viewingMessage: number;
        newMessages: number;
        containsText: string;
        containsLock: 0;
    }
    class MailboxView extends React.Component<{}, MailboxState> {
        private reloadTimeout;
        private element;
        constructor(props: {}, context?: any);
        private loadMessages;
        composeMessage(): void;
        serviceErrorHandler(response: ServiceResponse): void;
        initialLoadFolders(): void;
        changeFolder(folder: string): void;
        changePage(page: number): void;
        setElement(el: HTMLElement): void;
        componentDidMount(): void;
        activeFolderName(): string;
        setContainsText(newValue: string): void;
        allChecked(): boolean;
        checkAll(): void;
        deleteSelected(): void;
        moveToFolder(folder: string, message?: MailboxItem): void;
        getToolbarProps(): MailboxToolbarProps;
        setChecked(message: MailboxItem, value: boolean): void;
        toggleSeen(message?: MailboxItem): void;
        refreshMessages(): void;
        signout(): void;
        render(): JSX.Element;
    }
}
declare namespace Serenity.EmailClient {
    class EmailSuggestEditor extends Serenity.Widget<EmailSuggestEditorOptions> {
        constructor(element: JQuery, opt: EmailSuggestEditorOptions);
    }
    interface EmailSuggestEditorOptions {
    }
}
declare namespace Serenity.EmailClient {
    class EmailContentEditor extends Serenity.HtmlContentEditor {
        constructor(element: JQuery, opt: Serenity.HtmlContentEditorOptions);
        getConfig(): Serenity.CKEditorConfig;
    }
}
declare namespace Serenity.EmailClient {
    class EmailComposeDialog extends Serenity.PropertyDialog<EmailComposeRequest, any> {
        private form;
        constructor();
        protected getFormKey(): string;
        private _reply;
        reply: EmailReplyResponse;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
