angular.module('diggit')
.controller('MainCtrl', ['$scope', 'post', 'posts', '$http', function($scope, post, posts, $http) {
    // TODO: this shouldn't need to refresh everytime
    post.getPosts().then(function(resp) {
        $scope.posts = resp.data;
        post.posts = resp.data;
    });
    // $scope.posts = post.posts;

    $scope.incrementUpvotes = post.incrementUpvotes;
    $scope.decrementUpvotes = post.decrementUpvotes;
}]);
