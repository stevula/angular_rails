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
        // title cannot be blank. link & body cannot both be blank.
        // TODO: this causes console errors in a ctrlr promise
        if(!post.title || (!post.link && !post.body)) {return;}
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
