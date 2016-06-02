(function() {
    //HomeCtrl.$inject = ["$q", "$http", "$interval", "$rootScope", "$scope"];
    
    function HomeCtrl($q, $http, $interval, $rootScope, $scope) {
        $scope.counter = 0;
        
        $scope.blabla = [];

        $scope.nums = [1,2,3];

        $scope.toggle =function() {
            $scope.showList = !$scope.showList;
        }
        
        $scope.inc = function() {

            $scope.counter++;

            //$scope.counter($scope.counter()+1);

            //$scope.set("counter", $scope.get("counter")+1);

            console.log($rootScope.$$watchersCount);
        }

        setInterval(function() {
            ++$scope.counter;

            $scope.$apply();

            // $scope.$apply(function() {
            // });
        }, 1000);
    }

    angular.module("myApp").controller(
        "HomeCtrl", [
            "$q", 
            "$http", 
            "$interval", 
            "$rootScope", 
            "$scope",
            HomeCtrl
        ]);
})();
