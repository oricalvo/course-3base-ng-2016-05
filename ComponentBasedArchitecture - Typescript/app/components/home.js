"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var appModule_1 = require("../common/appModule");
var Component_1 = require("../common/Component");
require("./contactList");
var HomeController = (function (_super) {
    __extends(HomeController, _super);
    function HomeController($attrs, $scope, $element) {
        _super.call(this, $attrs, $scope, $element);
        this.contacts1 = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
        this.contacts2 = [
            { id: 1, name: "Udi" },
            { id: 2, name: "Carmit" },
        ];
    }
    HomeController.prototype.add = function () {
        var contact = { id: -1, name: this.name };
        this.contacts1.push(contact);
        this.contacts2.push(contact);
    };
    HomeController.prototype.onDeleteContact1 = function (index) {
        this.contacts1.splice(index, 1);
    };
    HomeController.prototype.onDeleteContact2 = function (index) {
        this.contacts2.splice(index, 1);
    };
    HomeController.prototype.destroyContactList = function () {
        this.contactList1.destroy();
        //this.contactList1.remove();
        //this.destroy();
    };
    return HomeController;
}(Component_1.Component));
appModule_1.appModule.component("home", {
    controller: HomeController,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
//# sourceMappingURL=home.js.map