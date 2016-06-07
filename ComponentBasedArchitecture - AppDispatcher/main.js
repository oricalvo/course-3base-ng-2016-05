var appModule = require("./app/common/appModule");

require("./app/services/authService");
require("./app/services/appDispatcher");

require("./app/directives/ComponentName");

require("./app/components/home");

angular.bootstrap(document.getElementById("html"), [appModule.name]);