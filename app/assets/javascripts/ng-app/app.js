angular
.module('diggit', ['ngRoute', 'templates'])
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
    .otherwise('/');

    $locationProvider.html5Mode(true);
}]);

// TODO: add users
// TODO: prohibit double-voting (except vote reversal)
// TODO: pagination
// TODO: prettify
// TODO: post filters
// TODO: image/video posting
// TODO: user to user messaging
// TODO: user prefs (bg color, etc)
// TODO: categories
// TODO: show time as time ago
// TODO: make logo
// TODO: client side validations / errors
// TODO: moderators
// TODO: enable commenting
// TODO: allow commenting on comments
// TODO: allow editing posts
// TODO: allow deleting posts
// TODO: show author on post detail page
// TODO: show author on post view and listing
// TODO: change color of vote arrow on click
// TODO: show last edited on
// TODO: tidy up CSS
// TODO: api integrations?
