var appModule = require("../common/appModule");
var Component = require("../common/Component");

function ContactListController($attrs, $scope, $element) {
    Component.call(this, $attrs, $scope, $element);
}

ContactListController.prototype = Object.create(Component.prototype);

ContactListController.prototype.remove = function(contact, index) {
    //this.contacts.splice(index, 1);
    
    var args = {
        contact: contact, 
        index: index
    };
    
    this.onDeleteContact(args);
}

appModule.component("contactList", {
    controller: ContactListController,
    template: require("./contactList.html!text"),
    styles: require("./contactList.css!css"),
    bindings: {
        contacts: "<",
        onDeleteContact: "&",
    }
});
