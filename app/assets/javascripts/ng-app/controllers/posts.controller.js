angular.module('diggit')
.controller('PostsCtrl', ['$scope', 'post', function($scope, post) {
    // TODO: this shouldn't need to refresh everytime
    post.getPosts().then(function(resp) {
        $scope.posts = resp.data;
    });
}]);