angular.module('diggit')
.controller('SidebarCtrl', ['$scope', 'post', 'posts', function($scope, post, posts) {
    var defaultPost = {
        mediaType: "link",
        category: "random",
        title: "",
        author: "anonymous",
        upvotes: 0,
        link: "",
        body: "",
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    $scope.post = angular.copy(defaultPost);
    $scope.posts = posts.posts;

    $scope.createPost = function() {
        post.createPost($scope.post)
        .then(function(resp) {
            post.posts.push($scope.post);
            $scope.post = angular.copy(defaultPost);
        });
    };
}]);