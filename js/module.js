(function () {
    "use strict";

    var module = angular.module("soccerApp", ["ngRoute"]);
    module.constant('API_URL', 'http://127.0.0.1:8000');
    module.config(function($routeProvider) {
        $routeProvider
            .when("/team",{ template: "<team-list></team-list>"})
            .when("/team/:id/players",{ template: "<player-list></player-list>"})
            .otherwise({ redirectTo: "/team"});
    })

}());
