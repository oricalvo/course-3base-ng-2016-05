var appModule = require("../common/appModule");

appModule.directive("componentName", function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                //console.log("componentName.link");

                var parent = scope.$ctrl;
                var component = element.isolateScope().$ctrl;
                parent[attrs.componentName] = component;

                // console.log();
                // console.log(element);
                // console.log();
            }
        };
    }
);