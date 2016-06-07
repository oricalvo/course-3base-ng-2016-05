var appModule = require("../common/appModule");
var Component = require("../common/Component");
require("./contactList");

function HomeController($attrs, $scope, $element) {
    Component.call(this, $attrs, $scope, $element);

    this.contacts1 = [
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
    ];

    this.contacts2 = [
        {id: 1, name: "Udi"},
        {id: 2, name: "Carmit"},
    ];
}

HomeController.prototype = Object.create(Component.prototype);

HomeController.prototype.add = function() {
    var contact = {id: -1, name: this.name};
    this.contacts1.push(contact);
    this.contacts2.push(contact);
}

HomeController.prototype.onDeleteContact1 = function(index) {
    this.contacts1.splice(index, 1);
}

HomeController.prototype.onDeleteContact2 = function(index) {
    this.contacts2.splice(index, 1);
}

HomeController.prototype.destroyContactList = function() {
    this.contactList1.destroy();

    //this.destroy();
}

appModule.component("home", {
    controller: HomeController,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
