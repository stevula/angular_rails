'use strict';

angular
.module('diggit', ['ngRoute', 'templates', 'Devise'])
.config(['$routeProvider', '$locationProvider', 'AuthProvider',
    function($routeProvider, $locationProvider, AuthProvider) {

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
    // .otherwise('/');

    $locationProvider.html5Mode(true);

    AuthProvider.loginPath('/api/login');
    AuthProvider.logoutPath('/api/logout');
}]);
