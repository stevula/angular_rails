angular.module('diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'post', '$filter',
    function($scope, $routeParams, post, $filter) {
        $scope.post = $filter('filter')(post.posts, {id: Number($routeParams.id)})[0];

        // TODO: DRYer solution? comment voting methods below identical to post 
        // voting methods
        $scope.incrementUpvotes = post.incrementUpvotes;
        $scope.decrementUpvotes = post.decrementUpvotes;
}]);
