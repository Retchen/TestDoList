'use strict';

// Declare app level module which depends on views, and components
angular.module('TestDoList', [
  'ngRoute',
  'TestDoList.view1',
  'TestDoList.view2',
  'TestDoList.version',
  'restangular'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
