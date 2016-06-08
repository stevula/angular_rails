angular.module('diggit')
.directive('sidebar', function() {
    return {
        require: 'E',
        templateUrl: 'sidebar.html'
    };
});