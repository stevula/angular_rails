angular
.module('diggit', ['ngRoute', 'templates'])
.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    })
    .when('/posts/:id*', {
        templateUrl: 'posts.html',
        controller: 'PostCtrl'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);
}]);

// TODO: enable posting body-only posts
// TODO: add users
// TODO: persist data in back-end - watch out for race conditions
// TODO: prohibit double-voting (except vote reversal)
// TODO: pagination
// TODO: prettify
// TODO: filters
// TODO: image/video posting
// TODO: user to user messaging
// TODO: user prefs (bg color, etc)
// TODO: categories
// TODO: show post date/time or how long ago
// TODO: make logo
// TODO: client side validations / errors
// TODO: moderators