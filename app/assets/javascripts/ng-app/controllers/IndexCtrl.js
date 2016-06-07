angular.module('AngularRails')
.controller('IndexCtrl', ['$scope', 'posts', function($scope, posts) {
    $scope.posts = posts.posts;
    
    $scope.addPost = function() {
        // reject if empty
        if(!$scope.title || $scope.title === '') {return;}

        $scope.posts.push({
            title: $scope.title,
            upvotes: 0,
            link: $scope.link,
            comments: [
                {author: 'Barry', body: 'Just awful...', upvotes: 2},
                {author: 'Harry', body: 'Just great!', upvotes: 5},
            ]
        });
    };
    $scope.incrementUpvotes = function(post) {
        post.upvotes++;
    };
    $scope.decrementUpvotes = function(post) {
        post.upvotes--;
    };
}]);
