angular.module('diggit').directive('voteArea', function() {
    return {
        require: 'E',
        templateUrl: 'vote-area.html'
    };
});
