import {appModule} from "../common/appModule";
import {Component} from "../common/Component";

export class PopupComponent extends Component {
    isActive: boolean;
    
    constructor($attrs, $scope, $element, di, private $compile) {
        super($attrs, $scope, $element);

        console.log("Popup created");

        di.value("popup", this);
        
        this.isActive = false;
    }

    show(tagName: string) {
        this.isActive = true;

        var template = "<" + tagName + "></" + tagName + ">";
        var contentElement = angular.element(template);

        var linkFn = this.$compile(contentElement);
        linkFn(this.$scope);

        this.$element.find(".content").append(contentElement);

        console.log(this.$scope);

        var component = this.$scope.$$childHead.$ctrl;
        return component;
    }
}

appModule.component("popup", {
    controller: PopupComponent,
    template: require("./popup.html!text"),
    styles: require("./popup.css!css"),
    bindings: {
    }
});
