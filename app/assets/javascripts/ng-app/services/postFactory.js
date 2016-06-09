angular.module('diggit')
.factory('post', ['$http', function($http) {
    var post = {
        getPosts: function() {
            return $http.get('/api/posts');
        },
        getPostById: function(id) {
            return $http.get('/api/posts/' + id);
        },
        createPost: function(post) {
            // reject if empty
            if(!post.title || post.title === '') {return;}
            // placeholder
            post.author = "anonymous";

            return $http.post('/api/posts', post);
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
