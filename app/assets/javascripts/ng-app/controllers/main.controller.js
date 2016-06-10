angular.module('diggit')
.controller('MainCtrl', ['$scope', 'post', function($scope, post) {
    post.getPosts().then(function(resp) {
        // TODO: probably a better way to handle this than using a top-level scope like this
        post.posts = resp.data;
        $scope.posts = post.posts;
    });
}]);
