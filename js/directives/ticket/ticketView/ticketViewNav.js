/**
 * Created by jtomasevic on 7/13/14.
 */
chiselApp.directive('ticketViewNav', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/ticket/ticketView/ticketViewNav.html' ,
        //scope:true,
        transclude: true
    }

})