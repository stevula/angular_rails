angular.module('Diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'posts', 
    function($scope, $routeParams, posts) {
        $scope.post = posts.posts[$routeParams.id];

        $scope.addComment = function() {
            // reject if comment body empty
            if(!$scope.body || $scope.body === '') {return;}

            $scope.post.comments.push({
                body: $scope.body,
                upvotes: 0,
                author: 'default user'
            });
        };
    }]);