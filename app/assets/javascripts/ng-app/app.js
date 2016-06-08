angular
.module('diggit', ['ngRoute', 'templates'])
.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
    })
    .when('/posts/:id*', {
        templateUrl: 'post/post.html',
        controller: 'PostCtrl'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);
}]);

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
// TODO: show time as time ago
// TODO: make logo
// TODO: client side validations / errors
// TODO: moderators
// TODO: align voting arrows better
// TODO: allow commenting on comments
// TODO: allow editing posts
// TODO: allow deleting posts
// TODO: figure out how to share voting arrows between posts and comments (diff model, same function)
