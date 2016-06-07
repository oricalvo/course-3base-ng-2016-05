export class Component {
    protected $scope;
    protected $element;
    protected $attrs;
    
    constructor($attrs, $scope, $element) {
        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        
        if($attrs.componentName) {
            console.log($attrs.componentName);

            $scope.$parent.$ctrl[$attrs.componentName] = this;
        }
    }
    
    public destroy() {
        this.$scope.$destroy();
        this.$element.remove();
    }
}
