/**
 * Created by jtomasevic on 7/12/14.
 */
chiselApp.directive('tableView', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/ticket/collections/tableview.html' ,
        //scope:true,
        transclude: true
    }

});