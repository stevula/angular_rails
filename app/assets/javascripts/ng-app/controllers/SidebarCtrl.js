angular.module('diggit')
.controller('SidebarCtrl', ['$scope', 'post', function($scope, post) {
    $scope.posts = post.posts;
    $scope.addPost = post.addPost;
}]);