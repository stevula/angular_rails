angular.module('Diggit')
.controller('SidebarCtrl', ['$scope', function($scope) {
    $scope.addPost = function() {
        // reject if empty
        if(!$scope.title || $scope.title === '') {return;}

        $scope.posts.push({
            title: $scope.title,
            upvotes: 0,
            link: $scope.link,
            comments: [
                {author: 'Barry', body: 'Just awful...', upvotes: 2},
                {author: 'Harry', body: 'Just great!', upvotes: 5},
            ]
        });
    };
}]);