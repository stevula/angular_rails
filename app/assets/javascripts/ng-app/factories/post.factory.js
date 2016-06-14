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
        if (!post.title || (!post.link && !post.body)) {return;}

        return $http.post('/api/posts', post);
    };
    post.createComment = function(comment) {
        // TODO: write this method
        alert("commenting disabled");
    };
    // TODO: refactor. possibly combine increment and decrement also.
    post.incrementUpvotes = function(post) {
        if (post.upvoted) {
            // undo previous vote
            post.upvoted = false;
            post.upvotes--;
        }
        else if (post.downvoted) {
            post.upvotes += 2;
            post.downvoted = false;
            post.upvoted = true;
        }
        else {
            post.upvotes++;
            post.downvoted = false;
            post.upvoted = true;
        }
    };
    // TODO: refactor
    post.decrementUpvotes = function(post) {
        if (post.downvoted) {
            // undo previous vote
            post.downvoted = false;
            post.upvotes++;
        }
        else if (post.upvoted) {
            post.upvotes -= 2;
            post.downvoted = true;
            post.upvoted = false;
        }
        else {
            post.upvotes--;
            post.downvoted = true;
            post.upvoted = false;
        }
    };

    return post;
}]);
