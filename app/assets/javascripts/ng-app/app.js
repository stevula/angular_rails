angular
.module('AngularRails', ['ngRoute', 'templates'])
.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'index.html',
        controller: 'IndexCtrl'
    })
    .when('/posts/:id', {
        templateUrl: 'posts.html',
        controller: 'PostCtrl'
    })
    .otherwise('/');
    $locationProvider.html5Mode(true);
}]);