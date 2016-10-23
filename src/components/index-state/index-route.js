import template from './index-state.html!text';
import defaultSub from './default-sub.html!text';

function indexRouteConfig($stateProvider) {
    $stateProvider
        .state('app.index', {
            url: 'index',
            views: {
                application: {
                    controller: 'IndexStateController as indexState',
                    template
                },
                'sub@app.index': {
                    template: defaultSub
                }
            }
        });
}

export default [
    '$stateProvider',
    indexRouteConfig
];
