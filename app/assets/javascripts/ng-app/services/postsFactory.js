angular.module('AngularRails')
.factory('posts', function() {
    return {
        posts: [{
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
        }]
    };
});
