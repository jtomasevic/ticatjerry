/**
 * Created by jtomasevic on 8/2/14.
 */
chiselApp.directive('customerFilters', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/search/customer-filters.html' ,
        transclude: true
    }
});