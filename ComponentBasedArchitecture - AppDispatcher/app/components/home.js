var appModule = require("../common/appModule");
var Component = require("../common/Component");
require("./contactList");

function HomeController($attrs, $scope, $element, authService) {
    Component.call(this, $attrs, $scope, $element);

    this.contacts1 = [
        {id: 1, name: "Ori"},
        {id: 2, name: "Roni"},
    ];

    this.contacts2 = [
        {id: 1, name: "Udi"},
        {id: 2, name: "Carmit"},
    ];

    this.authService = authService;
}

HomeController.prototype = Object.create(Component.prototype);
HomeController.prototype.constructor = HomeController;

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
}

HomeController.prototype.logout = function() {
    this.authService.logout();

    // Redux, Flux
    // this.actionDispatcher(new LogoutAction());
    // var action = {type: DELETE_COMMAND, args: {contactId: 1234};
    // this.actionDispatcher(action);
}

appModule.component("home", {
    controller: HomeController,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
