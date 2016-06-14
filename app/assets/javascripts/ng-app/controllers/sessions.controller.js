angular.module('diggit')
.controller('SessionsCtrl', ['Auth', '$scope', function(Auth, $scope) {
    var credentials = {
        username: 'admin',
        email: 'admin@diggit.com',
        password: 'password'
    };
    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

    // Auth.currentUser().then(function(user) {
    //     $scope.user = user;
    // }, function(err) {
    //     console.log('not logged in: ', err)
    // });

    Auth.login(credentials, config).then(function(user) {
        console.log(user);
    }, function(err) {
        console.log("login error: ", err)
    });

    $scope.submitLogin = function(loginForm) {
        // TODO
        console.log(loginForm);
    };

    $scope.signOut = function() {
        // TODO
        console.log(submitLogin);
    };
}]);
