angular.module('diggit')
.factory('post', ['$http', function($http) {
    var post = {
        getPosts: function() {
            return $http.get('/api/posts');
        },
        createPost: function(post) {
            // reject if empty
            if(!post.title || post.title === '') {return;}

            // placeholder data
            post.comments = [
                {author: 'Barry', body: 'Just awful...', upvotes: 2},
                {author: 'Harry', body: 'Just great!', upvotes: 5},
            ];

            $http.post('/api/posts');
        },
        incrementUpvotes: function(post) {
            post.upvotes++;
        },
        decrementUpvotes: function(post) {
            post.upvotes--;
        }
    };

    return post;
}]);
