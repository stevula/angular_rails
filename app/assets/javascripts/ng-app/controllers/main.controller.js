angular.module('diggit')
.controller('MainCtrl', ['$scope', 'post', function($scope, post) {
    // TODO: this shouldn't need to refresh everytime
    post.getPosts().then(function(resp) {
        post.posts = resp.data;
        $scope.posts = post.posts;
    });
}]);
