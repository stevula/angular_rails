angular.module('diggit')
.directive('accountOptions', function() {
    return {
        require: 'E',
        templateUrl: 'user/account-options.html'
    };
});
