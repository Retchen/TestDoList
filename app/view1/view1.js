'use strict';

angular.module('MyApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($scope, $http) {

  // Identifiants pour consommer l'API FourSquare
  var client_id = "3A1BEMNUUIXY2EOA2WJPZTE1TSZJH0ALH442ODLBNZLMWSF0";
  var client_secret = "OK0LQYGSMTSMJETVHNV1GWUKJODPDZHIZ2DHH0FXL2CTDSGN";

  // longitude_latitude de Mérignac
  var longitude_latitude = "44.84,-0.6";

  // Liste des lieux
  var venues;

  // Appel API FourSquare avec identifiants (Pas de token)
  $http.get("https://api.foursquare.com/v2/venues/search?ll="+ longitude_latitude + "&client_id=" + client_id + "&client_secret=" + client_secret + "&v=20180911").then(function (response) {
    $scope.venues = response.data;
  });
  
}]);