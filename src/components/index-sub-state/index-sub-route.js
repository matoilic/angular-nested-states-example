import template from './index-sub-state.html!text';
import defaultSubsub from './default-subsub.html!text';

function indexSubRouteConfig($stateProvider) {
    $stateProvider
        .state('app.index.sub', {
            url: '/sub',
            views: {
                sub: {
                    controller: 'IndexSubStateController as indexSubState',
                    template
                },
                'subsub@app.index.sub': {
                    template: defaultSubsub
                }
            }
        });
}

export default [
    '$stateProvider',
    indexSubRouteConfig
];
