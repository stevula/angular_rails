angular.module('diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'post', 
    function($scope, $routeParams, post) {
        $scope.post = post.posts[$routeParams.id];

        // TODO: DRYer solution? comment voting methods below identical to post 
        // voting methods
        $scope.incrementUpvotes = post.incrementUpvotes;
        $scope.decrementUpvotes = post.decrementUpvotes;
}]);