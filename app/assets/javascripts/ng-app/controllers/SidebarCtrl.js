angular.module('diggit')
.controller('SidebarCtrl', ['$scope', 'post', function($scope, post) {
    $scope.posts = post.posts;
    $scope.addPost = post.addPost;
    // default post type for sidebar form
    $scope.post = {mediaType: "link"};
}]);