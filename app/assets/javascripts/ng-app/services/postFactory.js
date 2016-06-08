angular.module('diggit')
.factory('post', function() {
    return {
        posts: [{
            mediaType: 'link',
            category: 'random',
            title: 'Sample title',
            author: 'Sample author',
            upvotes: 9,
            link: 'sample.com',
            comments: [
                {author: 'Barry', body: 'Just awful...', upvotes: 2},
                {author: 'Harry', body: 'Just great!', upvotes: 5}
            ],
            createdOn: new Date(),
            updatedOn: new Date()
        },
        {
            mediaType: 'text',
            category: 'tech',
            title: 'Sample title 2',
            author: 'Sample author 2',
            upvotes: 50,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            comments: [],
            createdOn: new Date(),
            updatedOn: new Date()
        }],
        addPost: function(post) {
            // reject if empty
            if(!post.title || post.title === '') {return;}
            console.log(post)
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
                createdOn: new Date(),
                updatedOn: new Date()
            });
        },
        incrementUpvotes: function(post) {
            post.upvotes++;
        },
        decrementUpvotes: function(post) {
            post.upvotes--;
        }
    };
});
