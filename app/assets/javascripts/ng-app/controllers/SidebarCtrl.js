angular.module('diggit')
.controller('SidebarCtrl', ['$scope', 'post', function($scope, post) {
    $scope.posts = post.posts;
    $scope.createPost = post.createPost;
    // default post type for sidebar form
    $scope.post = {mediaType: "link"};
}]);