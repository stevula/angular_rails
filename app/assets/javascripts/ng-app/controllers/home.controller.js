angular.module('diggit')
.controller('HomeCtrl', ['$scope', 'post', '$http', function($scope, post, $http) {
    // TODO: this shouldn't need to refresh everytime
    post.getPosts().then(function(resp) {
        $scope.posts = resp.data;
        post.posts = resp.data;
    });

    $scope.incrementUpvotes = post.incrementUpvotes;
    $scope.decrementUpvotes = post.decrementUpvotes;
}]);
