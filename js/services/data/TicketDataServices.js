chiselApp.factory("ticketDataService", function($http, $q){
    return{
        myTickets:function(){
            var def = $q.defer();
            var response = {
                body:{

                }
            };
            response.body.tickets = getTestRequests();
            def.resolve(response);
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








