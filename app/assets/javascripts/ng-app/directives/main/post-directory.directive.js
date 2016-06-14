angular.module('diggit')
.directive('postDirectory', function() {
    return {
        require: 'E',
        templateUrl: 'home/post-directory.html'
    };
});