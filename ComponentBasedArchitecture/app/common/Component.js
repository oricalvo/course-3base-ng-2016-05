var appModule = require("../common/appModule");

function Component($attrs, $scope, $element) {
    this.$scope = $scope;
    this.$element = $element;
    this.$attrs = $attrs;
    
    if($attrs.componentName) {
        console.log($attrs.componentName);

        $scope.$parent.$ctrl[$attrs.componentName] = this;
    }
}

Component.prototype.destroy = function() {
    this.$scope.$destroy();
    this.$element.remove();
}

module.exports = Component;
