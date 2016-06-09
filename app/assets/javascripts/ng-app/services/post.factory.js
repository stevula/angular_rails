angular.module('diggit')
.factory('post', ['$http', function($http) {
    var post = {};

    post.posts = [];
    post.getPosts = function() {
        return $http.get('/api/posts');
    };
    post.getPostById = function(id) {
        return $http.get('/api/posts/' + id);
    };
    post.createPost = function(post) {
        // reject if empty
        if(!post.title || post.title === '') {return;}
        // placeholder
        post.author = "anonymous";

        return $http.post('/api/posts', post);
    };
    post.incrementUpvotes = function(post) {
        post.upvotes++;
    };
    post.decrementUpvotes = function(post) {
        post.upvotes--;
    };

    return post;
}]);
