angular.module('diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'post', 'posts', '$filter',
    function($scope, $routeParams, post, posts, $filter) {
        // only works if post.posts has already been populated (i.e. linked from index)
        $scope.post = $filter('filter')(posts.posts, {id: Number($routeParams.id)})[0];
        
        // TODO: DRYer solution? comment voting methods below identical to post 
        // voting methods
        $scope.incrementUpvotes = post.incrementUpvotes;
        $scope.decrementUpvotes = post.decrementUpvotes;
}]);
