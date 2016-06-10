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

            // placeholder
            $scope.post.comments = [{
                author: 'anon',
                body: "Potato chips",
                upvotes: 0
            },
            {
                author: "sue",
                body: "freakazoid",
                upvotes: 0
            }];

            post.posts.push($scope.post);
            console.log($scope.post.comments)

            // reset
            $scope.post = angular.copy(defaultPost);
        });
    };
}]);
