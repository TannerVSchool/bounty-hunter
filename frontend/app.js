var app = angular.module("BountyApp", []);

app.controller("MainController", ["$scope", "HttpService", function($scope, HttpService) {
    $scope.newBounty = {};

    $scope.getAllBounties = function() {
        HttpService.getAllBounties().then(
            function(bountyList) {
                $scope.bountyList = bountyList;
            })
    };

    $scope.deleteBounty = function(bountyId, index) {
        console.log("Clicked");
        HttpService.deleteBounty(bountyId).then(
            function(deleteBounty) {
                if (deleteBounty) {
                    $scope.bountyList.splice(index, 1);
                };
            })
    };

    $scope.addBounty = function() {
        HttpService.addBounty($scope.newBounty).then(
            function(newBounty) {
                $scope.bountyList.push(newBounty);
            })
    }

    $scope.getAllBounties();
}]);