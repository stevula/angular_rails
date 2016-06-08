angular.module('diggit')
.directive('postDetail', function() {
    return {
        require: 'E',
        templateUrl: 'post/post-detail.html'
    };
});