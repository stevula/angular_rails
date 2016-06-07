angular
.module('AngularRails', ['ngRoute', 'templates'])
.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'index.html',
        controller: 'IndexCtrl'
    })
    .when('/posts/:id*', {
        templateUrl: 'posts.html',
        controller: 'PostCtrl'
    })
    .otherwise('/');
    
    $locationProvider.html5Mode(true);
}])
.run(['$compile', '$rootScope', '$document', function($compile, $rootScope, $document) {
    return $document.on('page:load', function() {
        var body, compiled;
        body = anguler.element('body');
        compiled = $compile(body.html())($rootscope);
        return body.html(compiled);
    });
}]);