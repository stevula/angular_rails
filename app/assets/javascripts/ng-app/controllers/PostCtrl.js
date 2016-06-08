angular.module('diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'post', 
    function($scope, $routeParams, post) {
        $scope.post = post.posts[$routeParams.id];

        $scope.addPost = post.addPost;
        $scope.incrementUpvotes = post.incrementUpvotes;
        $scope.decrementUpvotes = post.decrementUpvotes;
}]);