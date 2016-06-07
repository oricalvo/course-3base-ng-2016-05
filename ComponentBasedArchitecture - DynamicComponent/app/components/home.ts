import {appModule} from "../common/appModule";
import {Component} from "../common/Component";
import "./contactList";
import {ContactListController} from "./contactList";
import {PopupComponent} from "./popup";

class HomeController extends Component {
    contacts1: Contact[];
    contacts2: Contact[];
    name: string;
    contactList1: ContactListController;

    constructor($attrs, $scope, $element, private popup: PopupComponent) {
        super($attrs, $scope, $element);

        this.contacts1 = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];

        this.contacts2 = [
            {id: 1, name: "Udi"},
            {id: 2, name: "Carmit"},
        ];
    }
    add() {
        var contact = {id: -1, name: this.name};
        this.contacts1.push(contact);
        this.contacts2.push(contact);
    }

    onDeleteContact1(index) {
        this.contacts1.splice(index, 1);
    }

    onDeleteContact2(index) {
        this.contacts2.splice(index, 1);
    }

    destroyContactList() {
        this.contactList1.destroy();

        //this.contactList1.remove();

        //this.destroy();
    }

    composeMail() {
        var comp: ContactListController = this.popup.show("contact-list");
        comp.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }
}

interface Contact {
    id: number;
    name: string;
}

appModule.component("home", {
    controller: HomeController,
    template: require("./home.html!text"),
    styles: require("./home.css!css"),
});
