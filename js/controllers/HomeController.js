/**
 * Created by jtomasevic on 3/28/14.
 */
'user strict'

chiselApp.controller('HomeController',
    function HomeController($scope, userDataService,$cookies){
        $scope.user = {
            email : 'jtomasevic@gmail.com',
            password : 'aronmilica'
        }

        $scope.signup = function(user){
            console.log(user);
            userDataService.signup(user)
                .then(function(data){
                    $cookies.user_id = data.body.user.id;
                    console.log("signup", data.body.user);
                    window.location.href = '#/main';
                });

        }
        $scope.signin = function(user){
            console.log(user);
            userDataService.signin(user)
                .then(function(data){
                    $cookies.user_id = data.body.user.id;
                    console.log("signin", data.body.user);
                    window.location.href = '#/main';
                });
        }

    }
)