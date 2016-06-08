angular.module('diggit')
.directive('header', function() {
    return {
        require: 'E',
        templateUrl: 'header.html'
    };
});