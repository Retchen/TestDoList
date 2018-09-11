'use strict';

// Declare app level module which depends on views, and components
angular.module('MyApp', [
  'ngRoute',
  'MyApp.view1',
  'MyApp.view2',
  'MyApp.version',
  'restangular'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
