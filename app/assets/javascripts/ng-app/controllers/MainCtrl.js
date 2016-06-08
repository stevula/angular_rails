angular.module('diggit')
.controller('MainCtrl', ['$scope', 'post', '$http', function($scope, post, $http) {
    // $scope.posts = post.posts;
    $http.get('/api/posts')
    .then(function(resp) {
        console.log(resp.data)
        $scope.posts = resp.data;
    });

    $scope.incrementUpvotes = post.incrementUpvotes;
    $scope.decrementUpvotes = post.decrementUpvotes;
}]);
