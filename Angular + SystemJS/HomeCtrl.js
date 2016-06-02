var appModule = require("./app").appModule;
require("./HomeCtrl.css!css");

appModule.controller("HomeCtrl", function ($scope) {
    $scope.message = "XXX";
});
