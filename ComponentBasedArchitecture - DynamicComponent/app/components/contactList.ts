import {appModule} from "../common/appModule";
import {Component} from "../common/Component";

export class ContactListController extends Component {
    //
    //  Inputs
    //
    contacts;

    //
    //  Events
    //
    onDeleteContact;

    constructor($attrs, $scope, $element) {
        super($attrs, $scope, $element);

        console.log("ContactList.ctor");
    }

    private remove(contact, index) {
        var args = {
            contact: contact,
            index: index
        };

        this.onDeleteContact(args);
    }
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
