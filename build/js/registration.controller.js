/**
 * Created by air on 09.10.16.
 */
(function(){
    angular.module("Registration").controller("RegistrationController",function($scope,$http){
        $scope.register = function(){
            console.log($scope);
            $http.post('/Account/Register',
                {
                    Email:"",
                    Password:$scope.password,
                    ConfirmPassword:$scope.confirmPassword
                }).
            then(function(){});
        }
    });
})();