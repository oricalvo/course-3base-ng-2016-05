class BaseCtrl {
}

class HomeCtrl extends BaseCtrl {
    counter: number;
    contacts: Contact[];
    newName: string;

    constructor($interval) {
        super();

        this.counter = 0;

        $interval(() => {
            ++this.counter;
        }, 1000);
        
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
    }

    add() {
        if (!this.newName) {
            return;
        }

        var contact = {
            id: -1,
            name: this.newName,
        };

        this.contacts.push(contact);
    }

}

declare var angular;

angular.module("myApp").controller(
    "HomeCtrl", HomeCtrl);


// (function() {
//     "use strict";
//    
//     function HomeCtrl() {
//         this.message = "ABC";
//
//         this.contacts = [
//             {id: 1, name: "Ori"},
//             {id: 2, name: "Roni"},
//         ];
//     }
//
//     HomeCtrl.prototype.add = function () {
//         if (!this.newName) {
//             return;
//         }
//
//         var contact = {
//             id: -1,
//             name: this.newName,
//         };
//
//         this.contacts.push(contact);
//     }
//
//     angular.module("myApp").controller(
//         "HomeCtrl", HomeCtrl);
// })();

interface Contact {
    id: number;
    name: string;
}
