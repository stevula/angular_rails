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

    $scope.post = angular.copy(defaultPost);

    $scope.createPost = function() {
        post.createPost($scope.post)
        .then(function(resp) {
            $scope.post = resp.data;

            // placeholder comment data
            $scope.post.comments = [{
                author: 'anon',
                body: "Potato chips",
                upvotes: 4,
                createdAt: new Date()
            },
            {
                author: "sue",
                body: "freakazoid",
                upvotes: 4,
                createdAt: new Date()
            }];

            // just for development convenience so the new post appears at top
            $scope.post.upvotes = 999;

            post.posts.push($scope.post);

            // reset
            $scope.post = angular.copy(defaultPost);
        });
    };
}]);
