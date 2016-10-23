import './index-sub-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import IndexSubStateController from './index-sub-state-controller';
import indexSubRouteConfig from './index-sub-route';

const dependencies = [
    'ui.router'
];

export default angular
    .module('index-sub-state-component', dependencies)
    .controller('IndexSubStateController', IndexSubStateController)
    .config(indexSubRouteConfig);
