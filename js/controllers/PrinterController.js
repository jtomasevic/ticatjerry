/**
 * Created by jtomasevic on 8/2/14.
 */
chiselApp.controller('PrinterController',
    function PrinterController($scope, $cookies, searchDataService){
        // object containing search criteriums
        $scope.searchCriteria = {
            searchFor:null,
            globalFilter:'',
            sets : []
        }
        // called from nav-bar-printer.html template when user is choosing what he will search for.
        $scope.chooseSearchFor = function(sFor){
            $scope.searchCriteria.searchFor = sFor;
            $scope.setCurrentFilter();
        }
        // search for tickets or customerrs or... here we hold what is current target
        $scope.chooseSearchFor.current = null;
        // when user choose what he want to search (see $scope.chooseSearchFor) then we change $scope.searchCriteria.sets data source
        // $scope.searchCriteria.sets is model in filters.html template.
        $scope.setsToInclude = function(){
            $scope.searchCriteria.sets = ($scope.searchCriteria.searchFor == null) ? null : getSItemByParentId($scope.includeSets, $scope.searchCriteria.searchFor._id);
            return $scope.searchCriteria.sets;
        }
        // include set in search.
        $scope.toggleSetIncluded = function(si){
            si.include = !si.include;
        }
        // filter flags
        $scope.currentFilter = "";
        // when user choose what he want to search for, one of views become visible
        // this method set property currentFilter that is used in printerView.html template to handle which ui element is visible.
        // references: $scope.chooseSearchFor
        $scope.setCurrentFilter = function(){
            switch($scope.searchCriteria.searchFor._id){
                case "1": $scope.currentFilter = "ticket-filters";
                    break;
                case "2": $scope.currentFilter = "customer-filters";
                    break;
                case "3": $scope.currentFilter = "agreement-filters";
                    break;
                case "4": $scope.currentFilter = "machine-filters";
                    break;

            }
            console.log($scope.searchCriteria);
        }

        // toggle filter
        $scope.toggleFilterItem = function(fItem){
            fItem.include = !fItem.include;
        }
        // search
        $scope.search = function(){
            searchDataService.search($scope.searchCriteria)
            console.log($scope.searchCriteria)
        }

        // print
        $scope.print= function(){
            window.print();
        }

        // cancel whole search
        $scope.cancelSearch = function(){
            $scope.searchCriteria = {
                searchFor:null,
                globalFilter:'',
                sets : []
            }
        }

        $scope.searchFor = [{
                _id:"1",
                title:"Tickets",
                filters:[{
                    _id:"1",
                    title:"Status",
                    items:[{
                        _id:"1.1",
                        title:"Opened",
                        include:true,
                        include_dates:false,
                        dates:{
                            from:null,
                            to:null
                        }
                    },{
                        _id:"1.2",
                        title:"Allocated",
                        include:true,
                        include_dates:false,
                        dates:{
                            from:null,
                            to:null
                        }
                    },{
                        _id:"1.3",
                        title:"Dispatched",
                        include:true,
                        include_dates:false,
                        dates:{
                            from:null,
                            to:null
                        }
                    },{
                        _id:"1.4",
                        title:"Solved",
                        include:true,
                        include_dates:false,
                        dates:{
                            from:null,
                            to:null
                        }
                    }

                    ]
                },{
                    _id:"2",
                    title:"Warning",
                    items:[{
                        _id:"2.1",
                        title:"Hot",
                        include:true
                    },{
                        _id:"2.2",
                        title:"Warm",
                        include:true
                    },{
                        _id:"2.3",
                        title:"Aggr exp",
                        include:true
                    }

                    ]
                }
                ]
            },{
                _id:"2",
                title:"Customers"
            },{
                _id:"3",
                title:"Agreements"
            },{
                _id:"4",
                title:"Machines"
            }
        ]

        $scope.includeSets = [{
            _id:"1",
                parent_id:"1",
                available_sets:[{
                    _id:"1.1",
                    title:"Customer",
                    include:false,
                    filter:''
                },{
                    _id:"1.2",
                    title:"Agreement",
                    include:false,
                    filter:''
                },{
                    _id:"1.3",
                    title:"Machine",
                    include:false,
                    filter:''
                },{
                    _id:"1.4",
                    title:"Solution",
                    include:false,
                    filter:''
                },{
                    _id:"1.5",
                    title:"Spare parts",
                    include:false,
                    filter:''
                }]
            },{
            _id:"2",
                parent_id:"2",
                available_sets:[{
                    _id:"2.1",
                    title:"Contact person",
                    include:false,
                    filter:''
                },{
                    _id:"2.2",
                    title:"Agreement",
                    in:true,
                    filter:''
                },{
                    _id:"2.3",
                    title:"Machines",
                    include:false,
                    filter:''
                },{
                    _id:"2.4",
                    title:"Agreements",
                    include:false,
                    filter:''
                },{
                    _id:"2.5",
                    title:"Tickets",
                    include:false,
                    filter:''
                }]
            },{
                _id:"3",
                parent_id:"3",
                available_sets:[{
                    _id:"3.1",
                    title:"Customer",
                    include:false,
                    filter:''
                },{
                    _id:"3.2",
                    title:"Machine",
                    include:false,
                    filter:''
                },{
                    _id:"3.3",
                    title:"Tickets",
                    include:false,
                    filter:''
                }]
            },{
                _id:"4",
                parent_id:"4",
                available_sets:[{
                    _id:"4.1",
                    title:"Customers",
                    include:false,
                    filter:''
                },{
                    _id:"4.2",
                    title:"Agreements",
                    include:false,
                    filter:''
                },{
                    _id:"4.3",
                    title:"Tickets",
                    include:false,
                    filter:''
                }]
            }
        ]
    }
)



function getSItemById(coll, id){
    for(var i = 0; i< coll.length; i++){
        if(coll[i]._id == id){
            return coll[id];
        }
    }
    return null;
}
function getSItemByParentId(coll, id){
    for(var i = 0; i< coll.length; i++){
        if(coll[i].parent_id == id){
            return coll[i].available_sets;
        }
    }
    console.log("not found");
    return null;
}