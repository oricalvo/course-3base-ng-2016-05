"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var appModule_1 = require("../common/appModule");
var Component_1 = require("../common/Component");
var ContactListController = (function (_super) {
    __extends(ContactListController, _super);
    function ContactListController($attrs, $scope, $element) {
        _super.call(this, $attrs, $scope, $element);
        console.log("ContactList.ctor");
    }
    ContactListController.prototype.remove = function (contact, index) {
        var args = {
            contact: contact,
            index: index
        };
        this.onDeleteContact(args);
    };
    return ContactListController;
}(Component_1.Component));
exports.ContactListController = ContactListController;
appModule_1.appModule.component("contactList", {
    controller: ContactListController,
    template: require("./contactList.html!text"),
    styles: require("./contactList.css!css"),
    bindings: {
        contacts: "<",
        onDeleteContact: "&",
    }
});
//# sourceMappingURL=contactList.js.map