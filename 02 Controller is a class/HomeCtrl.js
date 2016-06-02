(function() {
    "use strict";
    
    function HomeCtrl() {
        this.message = "ABC";

        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
    }

    HomeCtrl.prototype.add = function () {
        if (!this.newName) {
            return;
        }

        var contact = {
            id: -1,
            name: this.newName,
        };

        this.contacts.push(contact);
    }

    angular.module("myApp").controller(
        "HomeCtrl", HomeCtrl);
})();
