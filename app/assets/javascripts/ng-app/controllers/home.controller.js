angular.module('diggit')
.controller('HomeCtrl', ['$scope', 'post', '$http', function($scope, post, $http) {
    $scope.incrementUpvotes = post.incrementUpvotes;
    $scope.decrementUpvotes = post.decrementUpvotes;
}]);
