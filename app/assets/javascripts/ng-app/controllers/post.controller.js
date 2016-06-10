angular.module('diggit')
.controller('PostCtrl', ['$scope', '$routeParams', 'post', '$filter',
    function($scope, $routeParams, post, $filter) {
        $scope.postFactory = post;

        // to ensure post view page updates if the service hasn't loaded posts yet
        $scope.$watch('postFactory.posts', function(data) {
            $scope.post = $filter('filter')(post.posts, {id: Number($routeParams.id)})[0];
        });

        $scope.createComment = post.createComment;

        $scope.incrementUpvotes = post.incrementUpvotes;
        $scope.decrementUpvotes = post.decrementUpvotes;
}]);
