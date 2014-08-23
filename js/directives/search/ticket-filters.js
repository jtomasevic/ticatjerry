/**
 * Created by jtomasevic on 8/2/14.
 */
chiselApp.directive('ticketFilters', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/search/ticket-filters.html' ,
        transclude: true
    }
});