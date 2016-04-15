import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';

import todos from './modules/todos';

let App = angular.module('app', [
  'ui.router',
  'firebase',

  'tiy.todos'
]);

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}

App.config(config);
