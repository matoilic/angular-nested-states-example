import './index-sub-subsub-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import IndexSubSubsubStateController from './index-sub-subsub-state-controller';
import indexSubSubsubRouteConfig from './index-sub-subsub-route';

const dependencies = [
    'ui.router'
];

export default angular
    .module('index-sub-subsub-state-component', dependencies)
    .controller('IndexSubSubsubStateController', IndexSubSubsubStateController)
    .config(indexSubSubsubRouteConfig);
