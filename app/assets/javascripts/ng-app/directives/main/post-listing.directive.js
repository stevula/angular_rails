angular.module('diggit')
.directive('postListing', function() {
    return {
        require: 'E',
        templateUrl: 'main/post-listing.html'
    };
});