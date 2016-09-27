var app = angular.module("BountyApp");
app.service("HttpService", function($http) {

    this.getAllBounties = function() {
        return $http.get("/bounties").then(
            function(response) {
                var bountyList = response.data;
                return response.data;
            })
    };

    this.deleteBounty = function(bountyId) {
        return $http.delete("/bounties/" + bountyId).then(
            function(response) {
                var deletedBounty = response.data;
                return deletedBounty
            })
    };

    this.addBounty = function(bountyObj) {
        return $http.post("/bounties/", bountyObj).then(
            function(response) {
                var newBounty = response.data;
                return newBounty;
            })
    };

});