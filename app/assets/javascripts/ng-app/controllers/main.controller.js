angular.module('diggit')
.controller('MainCtrl', ['$scope', 'post', '$http', function($scope, post, $http) {
    post.getPosts().then(function(resp) {
        $scope.posts = resp.data;
    });

    console.log(post.posts())

    $scope.incrementUpvotes = post.incrementUpvotes;
    $scope.decrementUpvotes = post.decrementUpvotes;
}]);
