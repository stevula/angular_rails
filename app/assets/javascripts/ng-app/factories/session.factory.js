angular.module('diggit')
.factory('session', ['Auth', function(Auth) {
    var session = {};
    
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
    session.login = Auth.login(credentials, config);

    return session;
}]);