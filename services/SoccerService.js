angular.module("soccerApp").service("SoccerService", SoccerService);
SoccerService.$inject = ['$http', 'API_URL'];

function SoccerService($http, API_URL){

    var SoccerService = this;

    SoccerService.fetchTeams = function(callback){
        $http.get(API_URL+"/api/v1/teams/")
            .then(function(response) {
                SoccerService.success(response, callback)
            }, function(error){
                SoccerService.failure(error);
            });

    }

    SoccerService.fetchPlayers = function(id, callback){
        $http.get(API_URL+"/api/v1/teams/"+id+"/players")
            .then(function(response) {
                SoccerService.success(response, callback)
            }, function(error){
                SoccerService.failure(error);
            });

    }

    SoccerService.success = function(response, callback){
        if(response.status == 200){
            callback(response.data)
        }
    }

    SoccerService.failure = function(){
        alert("Error fetching Data");
    }
}