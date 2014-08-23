/**
 * Created by jtomasevic on 4/27/14.
 */
chiselApp.directive('navBar', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/main/nav-bar.html' ,
        //scope:true,
        transclude: true
    }

});
