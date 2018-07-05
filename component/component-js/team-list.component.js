(function () {
    "use strict";

    var module = angular.module("soccerApp");

    function controller(API_URL, SoccerService) {
        var model =this;
        model.teams = [];
        model.API_URL= API_URL;
        model.$onInit = function() {
            SoccerService.fetchTeams(function(response){
                model.teams = response;
            })
        };
    }

    module.component('teamList', {
        templateUrl: "./component/component-html/team-list.component.html",
        controllerAs: "model",
        controller: ['API_URL', 'SoccerService', controller]
    });
}());
