/**
 * Created by jtomasevic on 8/2/14.
 */
chiselApp.directive('agreementFilters', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/search/agreement-filters.html' ,
        transclude: true
    }
});