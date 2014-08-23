/**
 * Created by jtomasevic on 8/23/14.
 */
chiselApp.factory("searchDataService", function($http, $q, $cookies){
    return{
        search:function(searchObj){
            var def = $q.defer();
            var request = {
                body:{
                    search_obj:searchObj
                },
                user_id:$cookies.user_id
            };
            $http({
                url:_getApiUrl("servicerequest/search"),
                method:'POST',
                data:request
            }).success(function(data){
                    def.resolve(data);
                }).error(function(data, status){
                    def.reject(status);
                });
            return def.promise;
        },
        getTicket:function (id){
            var def = $q.defer();
            var response = {
                body:{

                }
            };
            var requests = getTestRequests();
            for(var i = 0;i<requests.length;i++){
                var r = requests[i];
                if(r._id == id){
                    response.body.ticket = r;
                }
            }
            def.resolve(response);
            return def.promise;
        }
    }
});