angular.module('diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'post', 
    function($scope, $routeParams, post) {
        $scope.post = post.posts[$routeParams.id];

        // TODO: DRYer solution? below are repeated from MainCtrl. 
        $scope.incrementUpvotes = post.incrementUpvotes;
        $scope.decrementUpvotes = post.decrementUpvotes;
}]);