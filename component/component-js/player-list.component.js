(function () {
    "use strict";

    var module = angular.module("soccerApp");

    function controller($http, $routeParams, SoccerService, API_URL) {
        var model =this;
        model.players = [];
        model.API_URL= API_URL;
        model.$onInit = function() {
            SoccerService.fetchPlayers($routeParams.id, function(response){
                model.players = response;
            });
        };
    }

    module.component('playerList', {
        templateUrl: "./component/component-html/player-list.component.html",
        controllerAs: "model",
        controller: ["$http", '$routeParams','SoccerService', 'API_URL', controller]
    });
}());
