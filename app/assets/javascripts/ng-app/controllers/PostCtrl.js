angular.module('diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'post', 
    function($scope, $routeParams, post) {
        // TODO: replace this with getPostById once implemented
        post.getPosts().then(function(resp) {
            var posts = resp.data;
            $scope.post = posts[$routeParams.id];
        });

        // TODO: DRYer solution? comment voting methods below identical to post 
        // voting methods
        $scope.incrementUpvotes = post.incrementUpvotes;
        $scope.decrementUpvotes = post.decrementUpvotes;
}]);