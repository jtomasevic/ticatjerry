/**
 * Created by jtomasevic on 9/7/14.
 */
chiselApp.directive('tableBuilder', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/search/table-builder.html' ,
        transclude: true
    }
});