angular.module('diggit').directive('voteArrows', function() {
    return {
        require: 'E',
        templateUrl: 'vote-arrows.html'
    };
});