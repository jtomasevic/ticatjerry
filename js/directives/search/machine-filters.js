/**
 * Created by jtomasevic on 8/2/14.
 */
chiselApp.directive('machineFilters', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/search/machine-filters.html' ,
        transclude: true
    }
});