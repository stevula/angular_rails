angular.module('diggit')
.directive('siteHeader', function() {
    return {
        require: 'E',
        templateUrl: 'nav/site-header.html'
    };
});