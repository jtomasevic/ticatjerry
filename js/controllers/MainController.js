/**
 * Created by jtomasevic on 7/12/14.
 */
chiselApp.controller('MainController',
    function HomeController($route, $scope){
        //////////////////////////////////
        // set up scope
        //////////////////////////////////
        // read ticket from route.
        $scope.myTickets = $route.current.locals.data.body.tickets;
        // set up flags for search filter by ticket importance
        $scope.showHot = true;
        $scope.showWarm = true;
        $scope.showRegular = true;
        // set up flags for search filter by ticket state
        $scope.showOpened = true;
        $scope.showAllocated = true;
        $scope.showDispatched = true;
        // default state for search view
        $scope.searchOpened = false;
        // default order
        $scope.orderField='date_to_solve';
        // set up type for caption. caption is what is written next to ticket number.
        $scope.captionType = 1;
        /////////////////////////////////


        // toggle search button in top menu to show/hide search view
        $scope.toggleSearch = function(){
            $scope.searchOpened = !$scope.searchOpened;
            var board = $("board-view");
            var margin = $scope.searchOpened ? "125px" : "0px";
            var interval = $scope.searchOpened ? 350 : 300;
            $(".container-fluid.chisel ").animate({
               marginTop:margin
            }, interval);
            console.log(board);
        }

        // edit ticket. go to ticketView
        $scope.editItem = function(item){
            window.location = "#/ticket/view/" + item._id;
        }

        // print
        $scope.print = function(){

            window.location = "#/printer"
        }

        /////////////////////////////////
        // filters
        /////////////////////////////////
        // filter by importance
        $scope.filterImportance = function(ticket){
            return (ticket.warning_flag == "danger" && $scope.showHot == true) ||
                (ticket.warning_flag == "warning" && $scope.showWarm == true) ||
                (ticket.warning_flag == "default" && $scope.showRegular == true) ;
        }
        // filter by importance
        $scope.filterStatus = function(ticket){
            return (ticket.status == "Opened" && $scope.showOpened == true) ||
                (ticket.status == "Dispatched" && $scope.showDispatched == true) ||
                (ticket.status == "Allocated" && $scope.showAllocated == true) ;
        }

        // filter for caption. caption is what is written next to ticket number.
        $scope.caption = function(ticket){
            switch ($scope.captionType){
                case 1:
                    return ticket.date_to_solve;
                case 2:
                    return ticket.customer.name;
                case 3:
                    return ticket.solution.employee;
            }
        }
        /////////////////////////////////


    }
)