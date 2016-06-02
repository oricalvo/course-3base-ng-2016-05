(function() {
    function HomeCtrl($scope) {
        $scope.message = "ABC";

        $scope.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
        
        $scope.add = function() {
        }

        $scope.add = function () {
            if (!$scope.newName) {
                return;
            }

            var contact = {
                id: -1,
                name: $scope.newName,
            };

            $scope.contacts.push(contact);
        }

        $scope.remove = function (contact, index) {
            if(confirm("Delete contact " + contact.name + " ?")) {
                //$scope.contacts.remove(contact);

                $scope.contacts.splice(index, 1);
            }
        }
    }

    angular.module("myApp").controller(
        "HomeCtrl", HomeCtrl);
})();
