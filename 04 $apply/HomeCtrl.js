(function() {
    function HomeCtrl($scope) {
        $scope.counter = 0;
        
        $scope.blabla = [];

        $scope.inc = function() {

            $scope.counter++;

            $scope.counter($scope.counter()+1);

            $scope.set("counter", $scope.get("counter")+1);
        }

        setInterval(function() {
            ++$scope.counter;

            //$scope.$apply();

            // $scope.$apply(function() {
            // });
        }, 1000);
    }

    angular.module("myApp").controller(
        "HomeCtrl", HomeCtrl);
})();
