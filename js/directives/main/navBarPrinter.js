/**
 * Created by jtomasevic on 8/2/14.
 */
chiselApp.directive('navBarPrinter', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/main/nav-bar-printer.html' ,
        //scope:true,
        transclude: true
    }

});
