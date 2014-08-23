/**
 * Created by alehijan on 5/23/14.
 */

var _apiUrl = "http://chiselapi.com/";

function __defaultRequestBody(){
    return{
        body:{
        },
        user:{

        }
    }
}

chiselApp.factory("dataService", function(){
    return{
        buildUrl:function(action){
            return _apiUrl +  action;
        },
        defaultRequest:function(){
            return{
                Body:{
                },
                User:''
            }
        }
    }
});