/**
 * Created by jtomasevic on 8/23/14.
 */
chiselApp.directive('filters', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/search/filters.html' ,
        transclude: true
    }
});