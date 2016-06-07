angular
.module('AngularRails', ['ngRoute', 'templates'])
.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'index.html',
        controller: 'IndexCtrl'
    });
    $locationProvider.html5Mode(true);
}]);