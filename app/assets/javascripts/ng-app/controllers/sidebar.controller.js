angular.module('diggit')
.controller('SidebarCtrl', ['$scope', 'post', function($scope, post) {
    // default post type for sidebar form
    $scope.post = {mediaType: "link"};

    post.getPosts().then(function(resp) {
        $scope.posts = resp.data;
    });

    $scope.createPost = function() {
        post.createPost($scope.post)
        .then(function(resp) {
            // TODO: want the resp to contain the new post
            $scope.posts.push($scope.post);
            $scope.post = {mediaType: "link"};
        });
    };
}]);