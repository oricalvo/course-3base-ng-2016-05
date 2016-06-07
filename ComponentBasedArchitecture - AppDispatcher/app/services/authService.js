var appModule = require("../common/appModule");

appModule.service("authService", function(appDispatcher) {
    
    function logout() {
        console.log("LOGOUT");

        appDispatcher.raise("logout");
        
        //$rootScope.$broadcast("logout");
    }

    function login() {
    }
    
    return {
        logout: logout,
        login: login,
    };
});
