angular.module('diggit')
.directive('postDirectory', function() {
    return {
        require: 'E',
        templateUrl: 'main/post-directory.html'
    };
});