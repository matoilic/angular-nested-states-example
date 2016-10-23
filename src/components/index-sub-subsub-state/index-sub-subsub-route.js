import template from './index-sub-subsub-state.html!text';

function indexSubSubsubRouteConfig($stateProvider) {
    $stateProvider
        .state('app.index.sub.subsub', {
            url: '/subsub',
            views: {
                subsub: {
                    controller: 'IndexSubSubsubStateController as indexSubSubsubState',
                    template
                }
            }
        });
}

export default [
    '$stateProvider',
    indexSubSubsubRouteConfig
];
