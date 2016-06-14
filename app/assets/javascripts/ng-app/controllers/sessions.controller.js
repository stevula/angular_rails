angular.module('diggit')
.controller('SessionsCtrl', ['session', '$scope', 'Auth', function(session, $scope, Auth) {
    $scope.logIn = function(credentials, config) {
        session.logIn.then(function(user) {
            console.log("login success: ", user);
            $scope.user = user;
        }, function(err) {
            console.log("login error: ", err);
        });
    };

    $scope.logOut = function() {
        session.logOut.then(function(resp) {
            delete $scope.user;
            console.log("logout success: ", resp);
        }, function(err) {
            console.log("logout error: ", err);
        });
    };
}]);
