angular.module('diggit')
.controller('MainCtrl', ['$scope', 'post', function($scope, post) {
    $scope.posts = post.posts;

    $scope.addPost = post.addPost;
    $scope.incrementUpvotes = post.incrementUpvotes;
    $scope.decrementUpvotes = post.decrementUpvotes;
}]);
