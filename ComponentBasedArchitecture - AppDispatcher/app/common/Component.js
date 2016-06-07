var appModule = require("../common/appModule");

function Component($attrs, $scope, $element) {
    var me = this;
    
    this.$scope = $scope;
    this.$element = $element;
    this.$attrs = $attrs;

    $scope.$on("$destroy", function() {
        me.onDestroy();
    });

    // if($attrs.componentName) {
    //     console.log($attrs.componentName);
    //
    //     $scope.$parent.$ctrl[$attrs.componentName] = this;
    // }
}

Component.prototype.onDestroy = function() {
}

Component.prototype.destroy = function() {
    this.$scope.$destroy();
    this.$element.remove();
}

module.exports = Component;
