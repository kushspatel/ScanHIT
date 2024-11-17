const constructRouterForChatPage = (workspaceId, sessionId) => {
    if (!workspaceId && !sessionId) {
        return '';
    } else if (!sessionId) {
        return {
            loc: btoa(JSON.stringify({
                'workspaceId': workspaceId,
            })),
        };
    } else {
        return {
            loc: btoa(JSON.stringify({
                'workspaceId': workspaceId,
                'sessionId': sessionId,
            })),
        };
    }
};

const deconstructRouterForChatPage = (router) => {
    if (!router?.query?.loc) {
        return {
            workspaceId: null,
            sessionId: null,
        };
    }
    const loc = atob(router?.query?.loc);
    return JSON.parse(loc);
};

const deconstructForLoginPage = (urlParams) => {
    if (!urlParams?.get('loc')) {
        return {
            workspaceId: null,
            sessionId: null,
        };
    }
    const loc = atob(urlParams?.get('loc'));
    return JSON.parse(loc);
};

export {
    constructRouterForChatPage,
    deconstructRouterForChatPage,
    deconstructForLoginPage,
};
