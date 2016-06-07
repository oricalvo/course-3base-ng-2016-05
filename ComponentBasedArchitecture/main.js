var appModule = require("./app/common/appModule");
require("./app/components/home");

angular.bootstrap(document.getElementById("html"), [appModule.name]);