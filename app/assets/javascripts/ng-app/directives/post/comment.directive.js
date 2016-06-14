angular.module('diggit')
.directive('comment', function() {
    return {
        require: 'E',
        templateUrl: 'post/comment.html'
    };
});
