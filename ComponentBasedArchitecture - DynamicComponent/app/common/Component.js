"use strict";
var Component = (function () {
    function Component($attrs, $scope, $element) {
        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        if ($attrs.componentName) {
            console.log($attrs.componentName);
            $scope.$parent.$ctrl[$attrs.componentName] = this;
        }
    }
    Component.prototype.destroy = function () {
        this.$scope.$destroy();
        this.$element.remove();
    };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=Component.js.map