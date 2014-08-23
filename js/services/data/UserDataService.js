/**
 * Created by alehijan on 5/23/14.
 */

chiselApp.factory("userDataService", function($http, $q){
    var __user = null;
    return{
        signup: function(user){
            var def = $q.defer();
            var response = {
                body:{
                    user:{
                        _id: 'aaa',
                        email:'jtomasevic@gmail.com',
                        name: 'Jovan Tomasevic'
                    }
                }
            };
            def.resolve(response);
//            var _data = {
//                body:{
//                    email:'jtomasevic@gmail.com',
//                    password:'aronmilica'
//                }
//            };
//            _data.body.user = user;
//            $http({
//                url:_apiUrl + "singup",
//                method:'POST',
//                data:_data
//            }).success(function(data){
//                def.resolve(data);
//                __user = data.body.user;
//            }).error(function(data, status){
//                def.reject(status);
//            });
            return def.promise;
        },
        signin: function(user){
            var def = $q.defer();
            var response = {
                body:{
                    user:{
                        _id: 'aaa',
                        email:'jtomasevic@gmail.com',
                        name: 'Jovan Tomasevic'
                    }
                }
            };
            def.resolve(response);
//            var _data = {
//                body:{
//
//                }
//            };
//            _data.body.user = user;
//            $http({
//                url:_apiUrl + "singin",
//                method:'POST',
//                data:_data
//            }).success(function(data){
//                    def.resolve(data);
//                    __user = data.body.user;
//                }).error(function(data, status){
//                    def.reject(status);
//                });
            return def.promise;
        }
    }
});