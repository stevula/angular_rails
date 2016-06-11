'use strict';

angular
.module('diggit', ['ngRoute', 'templates', 'Devise'])
.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    })
    .when('/posts/:id*', {
        templateUrl: 'post/post.html',
        controller: 'PostCtrl'
    })
    .when('/signup', {
        templateUrl: 'user/signup.html',
        controller: 'UsersCtrl'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);
}]);
