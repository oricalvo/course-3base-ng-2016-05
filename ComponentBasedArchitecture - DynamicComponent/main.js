"use strict";
var appModule_1 = require("./app/common/appModule");
require("./app/components/home");
require("./app/components/popup");
appModule_1.appModule.config(function ($provide) {
    console.log("config");
    $provide.value("di", $provide);
});
angular.bootstrap(document.getElementById("html"), [appModule_1.appModule.name]);
//# sourceMappingURL=main.js.map