var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseCtrl = (function () {
    function BaseCtrl() {
    }
    return BaseCtrl;
}());
var HomeCtrl = (function (_super) {
    __extends(HomeCtrl, _super);
    function HomeCtrl($interval) {
        var _this = this;
        _super.call(this);
        this.counter = 0;
        $interval(function () {
            ++_this.counter;
        }, 1000);
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }
    HomeCtrl.prototype.add = function () {
        if (!this.newName) {
            return;
        }
        var contact = {
            id: -1,
            name: this.newName
        };
        this.contacts.push(contact);
    };
    return HomeCtrl;
}(BaseCtrl));
angular.module("myApp").controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map