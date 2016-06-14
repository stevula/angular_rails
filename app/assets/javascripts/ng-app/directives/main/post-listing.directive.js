angular.module('diggit')
.directive('postListing', function() {
    return {
        require: 'E',
        templateUrl: 'home/post-listing.html'
    };
});