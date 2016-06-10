angular.module('diggit')
.directive('commentList', function() {
    return {
        require: 'E',
        templateUrl: 'post/comment-list.html'
    };
});
