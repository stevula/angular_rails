angular.module('diggit')
.factory('post', ['$http', function($http) {
    return {
        getPosts: function() {
            return $http.get('/api/posts');
        },
        addPost: function(post) {
            // reject if empty
            if(!post.title || post.title === '') {return;}

            this.posts.push({
                mediaType: post.mediaType,
                title: post.title,
                link: post.link,
                body: post.body,
                upvotes: 0,
                comments: [
                    {author: 'Barry', body: 'Just awful...', upvotes: 2},
                    {author: 'Harry', body: 'Just great!', upvotes: 5},
                ],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        },
        incrementUpvotes: function(post) {
            post.upvotes++;
        },
        decrementUpvotes: function(post) {
            post.upvotes--;
        }
    };
}]);
