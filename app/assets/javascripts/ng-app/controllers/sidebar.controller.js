angular.module('diggit')
.controller('SidebarCtrl', ['$scope', 'post', function($scope, post) {
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
    $scope.post = defaultPost;
    $scope.posts = post.posts;

    $scope.createPost = function() {
        post.createPost($scope.post)
        .then(function(resp) {
            post.posts.push($scope.post);
            $scope.post = defaultPost;
        });
    };
}]);