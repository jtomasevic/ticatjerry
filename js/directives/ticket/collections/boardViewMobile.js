/**
 * Created by jtomasevic on 7/27/14.
 */

chiselApp.directive('boardViewMobile', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/ticket/collections/boardViewMobile.html' ,
        //scope:true,
        transclude: true
    }

});