/**
 * Created by air on 09.10.16.
 */
(function(){
    angular.module("Games").controller("GameController",function($scope, $http){
        $scope.games = [
            {
                "img": "../img/ramka-02.jpg",
                "name": "На селі",
                "description": "вгадай, яка це свійська тварина"
            },
            {
                "img": "../img/ramka-02.jpg",
                "name": "У пошуках зірок",
                "description": "дізнайся основи астрономії"
            },
            {
                "img": "../img/ramka-02.jpg",
                "name": "Мішанина слів",
                "description": "склади речення зі слів"
            }
        ];
        $http.get("/api/games/get").then(function(games){
            $scope.games = games;
        });

    });
})();