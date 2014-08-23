/**
 * Created by jtomasevic on 7/12/14.
 */
'user strict'

chiselApp.controller('TicketController',
    function TicketController($scope,$route){
        $scope.ticket = $route.current.locals.data.body.ticket;



    }
)