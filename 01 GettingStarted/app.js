(function() {
    var module = angular.module("myApp", []);

    // var module2 = angular.module("module2", []);
    // module2.controller("blabla", function() {
    // });

    module.run(function ($rootScope) {
        console.log("run");
    });
})();
