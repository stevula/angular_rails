angular.module('diggit')
.factory('session', ['Auth', function(Auth) {
    
    var session = {};

    // var credentials = {
    //     username: 'admin',
    //     email: 'admin@diggit.com',
    //     password: 'password'
    // };
    // var login_config = {
    //     headers: {
    //         'X-HTTP-Method-Override': 'POST'
    //     }
    // };
    // var logout_config = {
    //     headers: {
    //         'X-HTTP-Method-Override': 'DELETE'
    //     }
    // };

    // // TODO: BUG: these are getting called during config phase
    // session.login = Auth.login(credentials, login_config);
    // session.logout = Auth.logout(logout_config);

    return session;
}]);