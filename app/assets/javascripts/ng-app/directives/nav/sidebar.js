angular.module('diggit')
.directive('sidebar', function() {
    return {
        require: 'E',
        templateUrl: 'nav/sidebar.html'
    };
});