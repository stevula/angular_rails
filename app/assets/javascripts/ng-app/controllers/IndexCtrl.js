angular.module('AngularRails')
.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.posts = [
        {
            title: 'Sample title',
            author: 'Sample author',
            upvotes: 9,
            link: 'sample.com',
            comments: []
        },
        {
            title: 'Sample title 2',
            author: 'Sample author 2',
            upvotes: 50,
            comments: []
        },
    ];
    $scope.addPost = function() {
        // reject if empty
        if(!scope.title || $scope.title === '') {return;}
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