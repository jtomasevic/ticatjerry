/**
 * Created by jtomasevic on 9/7/14.
 */
chiselApp.directive('printPreview', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/search/print-preview.html' ,
        transclude: true
    }
});