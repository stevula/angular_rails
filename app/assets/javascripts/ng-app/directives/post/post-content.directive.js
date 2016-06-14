angular.module('diggit')
.directive('postContent', function() {
    return {
        require: 'E',
        templateUrl: 'post/post-content.html'
    };
});
