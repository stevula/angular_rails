angular.module('diggit')
.directive('login', function() {
    return {
        require: 'E',
        templateUrl: 'user/login.html'
    };
});
