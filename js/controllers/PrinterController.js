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
                .then(function(data){
                    console.log("search result", data);
                    $scope.searchResult = data.body.result;
                });
            console.log($scope.searchCriteria)
        }
        // configure table view for printing
        // toggle column to include/exclude from preview
        $scope.toggleColumnConfig = function(colConfig){
            colConfig.include = !colConfig.include;
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
                title: "ServiceRequests",
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
                title: "Customers"
            },{
                _id:"3",
                title: "Agreements"
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
                    title: "ServiceRequests",
                    include:false,
                    filter:''
                }]
            }
        ]
        $scope.tableConfig = [
            {
                _id:"1",
                name:"Service Request",
                columns:[{
                    _id:"1.1",
                    name:"ServiceRequestNumber",
                    display_name:"No.",
                    include:true
                },{
                    _id:"1.2",
                    name:"ServiceRequestState",
                    display_name:"State",
                    include:true
                },{
                    _id:"1.4",
                    name:"ContactPersonName",
                    display_name:"Contact person",
                    include:false
                },{
                    _id:"1.5",
                    name:"DateTimeOpened",
                    display_name:"Opened",
                    include:true
                },{
                    _id:"1.6",
                    name:"DateTimeAllocated",
                    display_name:"Allocated",
                    include:true
                },{
                    _id:"1.7",
                    name:"DateTimeDispatched",
                    display_name:"Dispatched",
                    include:true
                }]
            },{
                _id:"2",
                name: "Customer",
                columns:[{
                    _id:"2.1",
                    name:"Name",
                    display_name:"Customer",
                    include:true
                },{_id:"2.2",
                    name:"FullName",
                    display_name:"Full name",
                    include:false
                },{_id:"2.3",
                    name:"Address",
                    display_name:"Address",
                    include:true
                },{_id:"2.4",
                    name:"City",
                    display_name:"City",
                    include:false
                },{_id:"2.5",
                    name:"PhoneNum",
                    display_name:"Phone",
                    include:false
                },{_id:"2.6",
                    name:"Fax",
                    display_name:"Fax",
                    include:false
                },{_id:"2.7",
                    name:"Email",
                    display_name:"Email",
                    include:true
                }]
            },{
                _id: "3",
                name: "Machine",
                columns:[{
                    _id:"3.1",
                    name:"Name",
                    display_name:"Machine",
                    include:true
                },{_id:"3.2",
                    name:"SerialNumber",
                    display_name:"Serial No.",
                    include:true
                },{_id:"3.3",
                    name:"AssetNumber",
                    display_name:"Asset No.",
                    include:true
                },{_id:"3.4",
                    name:"PreciseLocation",
                    display_name:"Location.",
                    include:false
                },{_id:"3.5",
                    name:"InstallationDate",
                    display_name:"Installation date",
                    include:false
                }]
            },{
                _id: "4",
                name: "Agreement",
                columns:[{
                    _id:"4.1",
                    name:"AgreementNumber",
                    display_name:"Agr Number",
                    include:true
                },{_id:"4.2",
                    name:"AgreementEndDate",
                    display_name:"Expiration date",
                    include:true
                },{_id:"4.3",
                    name:"C30days",
                    display_name:"C30 days",
                    include:false
                },{_id:"4.4",
                    name:"C7days",
                    display_name:"C7 days",
                    include:false
                },{_id:"4.5",
                    name:"C1days",
                    display_name:"C1 days",
                    include:false
                }]
            }]
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