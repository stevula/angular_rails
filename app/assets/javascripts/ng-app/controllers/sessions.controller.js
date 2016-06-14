angular.module('diggit')
.controller('SessionsCtrl', ['session', '$scope', 'Auth', function(session, $scope, Auth) {
    $scope.user = {};
    $scope.loginForm = {
        username: 'admin',
        email: 'admin@diggit.com',
        password: 'password'
    };
    var loginConfig = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };
    var logoutConfig = {
        headers: {
            'X-HTTP-Method-Override': 'DELETE'
        }
    };

    $scope.login = function(credentials, config) {
        Auth.login($scope.loginForm, loginConfig).then(function(user) {
            console.log("login success: ", user);
            $scope.user = user;
        }, function(err) {
            console.log("login error: ", err);
        });
    };
    $scope.logout = function(config) {
        Auth.logout(config).then(function(resp) {
            $scope.user = {};
            console.log("logout success: ", resp);
        }, function(err) {
            console.log("logout error: ", err);
        });
    };
}]);
