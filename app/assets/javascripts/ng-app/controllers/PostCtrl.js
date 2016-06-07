angular.module('AngularRails')
.controller('PostCtrl', ['$scope', '$routeParams', 'posts', 
    function($scope, $routeParams, posts) {
        console.log($routeParams)
        // TODO: assumes id is equal to array index...
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