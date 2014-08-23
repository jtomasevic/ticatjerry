/**
 * Created by jtomasevic on 7/12/14.
 */
chiselApp.directive('boardView', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/ticket/collections/boardView.html' ,
        //scope:true,
        transclude: true
    }

});