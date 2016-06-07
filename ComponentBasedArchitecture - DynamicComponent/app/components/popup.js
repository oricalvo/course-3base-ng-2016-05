"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var appModule_1 = require("../common/appModule");
var Component_1 = require("../common/Component");
var PopupComponent = (function (_super) {
    __extends(PopupComponent, _super);
    function PopupComponent($attrs, $scope, $element, di, $compile) {
        _super.call(this, $attrs, $scope, $element);
        this.$compile = $compile;
        console.log("Popup created");
        di.value("popup", this);
        this.isActive = false;
    }
    PopupComponent.prototype.show = function (tagName) {
        this.isActive = true;
        var template = "<" + tagName + "></" + tagName + ">";
        var contentElement = angular.element(template);
        var linkFn = this.$compile(contentElement);
        linkFn(this.$scope);
        this.$element.find(".content").append(contentElement);
        console.log(this.$scope);
        var component = this.$scope.$$childHead.$ctrl;
        return component;
    };
    return PopupComponent;
}(Component_1.Component));
exports.PopupComponent = PopupComponent;
appModule_1.appModule.component("popup", {
    controller: PopupComponent,
    template: require("./popup.html!text"),
    styles: require("./popup.css!css"),
    bindings: {}
});
//# sourceMappingURL=popup.js.map