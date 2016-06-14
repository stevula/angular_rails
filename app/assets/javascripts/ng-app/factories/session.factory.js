angular.module('diggit')
.factory('session', ['Auth', function(Auth) {
    var session = {};

    var credentials = {
        username: 'admin',
        email: 'admin@diggit.com',
        password: 'password'
    };
    var login_config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };
    var logout_config = {
        headers: {
            'X-HTTP-Method-Override': 'DELETE'
        }
    };

    session.logIn = Auth.login(credentials, login_config);
    session.logOut = Auth.logout(logout_config);

    return session;
}]);