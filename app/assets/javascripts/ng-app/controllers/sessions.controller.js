angular.module('diggit')
.controller('SessionsCtrl', ['session', '$scope', function(session, $scope) {

    // Auth.login(credentials, config).then(function(user) {
    //     console.log(user);
    // }, function(err) {
    //     console.log("login error: ", err)
    // });

    $scope.submitLogin = function(credentials, config) {
        session.login.then(function(user) {
            // console.log("HI")
            console.log(user)
            $scope.user = user;
        });
    };

    $scope.signOut = function() {
        // TODO
        console.log(submitLogin);
    };
}]);
