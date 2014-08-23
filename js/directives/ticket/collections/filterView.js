

chiselApp.directive('filterView', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/ticket/collections/filterView.html' ,
        //scope:true,
        transclude: true
    }

});