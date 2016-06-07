var appModule = require("../common/appModule");
var Component = require("../common/Component");

function ContactListController(appDispatcher, $attrs, $scope, $element) {
    Component.call(this, $attrs, $scope, $element);
    
    this.appDispatcher = appDispatcher;

    appDispatcher.subscribe("logout", this, this.onLogout); 

    // $scope.$on("logout", function() {
    //     console.log("ContactListController.onLogout");
    // });
}

ContactListController.prototype = Object.create(Component.prototype);
ContactListController.prototype.constructor = ContactListController; 

ContactListController.prototype.onDestroy = function() {
    this.appDispatcher.unsubscribe("logout", this, this.onLogout);
}
ContactListController.prototype.onLogout = function() {
    console.log("ContactListController.onLogout");
}

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
