'use strict';

var chiselApp = angular.module('chiselApp', ['ngResource', 'ngRoute', 'ngAnimate', 'ngCookies', 'ui.bootstrap.datetimepicker'])
    .config(function($routeProvider){

        $routeProvider.when('/test', {
            templateUrl:'templates/test/apitest.html',
            controller: 'ApiTestController'
        });

        $routeProvider.when('/main', {
            templateUrl:'templates/main.html',
            controller:'MainController',
            resolve:{
                data:function($q, $route, ticketDataService){
                    var def = $q.defer();
                    ticketDataService.myTickets()
                        .then(function(data){
                            def.resolve(data);
                            console.log("Data from routing", data)
                            return data;
                        })
                    return def.promise;
                }
            }
            //controller: 'ApiTestController'
        });

        $routeProvider.when('/ticket/view/:id', {
            templateUrl:'templates/directives/ticket/ticketView.html',
            controller: 'TicketController',
            resolve:{
                data:function($q, $route, ticketDataService){
                    var def = $q.defer();
                    var ticket_id = $route.current.params.id;
                    console.log("starting ticketview with id: ", ticket_id);
                    ticketDataService.getTicket(ticket_id).then(function(data){
                        def.resolve(data);
                        console.log("get story from resolve in route provider", data);
                    });
                    return def.promise;
                }
            }
        });
        $routeProvider.when('/printer',{
            templateUrl:'templates/printerView.html',
            controller: 'PrinterController'
        });


//        $routeProvider.when('/profile', {
//            templateUrl:'templates/profile.html',
//            controller: 'ProfileController',
//            resolve:{
//                data:function($q, $route,  storyDataService){
//                    var def = $q.defer();
//                    storyDataService.myStories().then(function(data){
//                       console.log("/profile->resolve->myStories", data);
//                       def.resolve(data);
//                    });
//                    return def.promise;
//                }
//            }
//        });
//        $routeProvider.otherwise({redirectTo:'/index'});
//        $routeProvider.when('/story', {
//            templateUrl:'templates/story/story.html',
//            controller: 'StoryController'
//        });
//        $routeProvider.when('/story/storyboard/:id', {
//            templateUrl:'templates/story/story-board.html',
//            controller: 'StoryBoardController',
//            resolve:{
//                data:function($q, $route, storyDataService){
//                    var def = $q.defer();
//                    var storyId = $route.current.params.id;
//                    console.log("storyid: ", storyId);
//                    storyDataService.getStory(storyId).then(function(data){
//                        def.resolve(data);
//                        console.log("get story from resolve in route provider", data);
//                    });
//                    return def.promise;
//                }
//            }
//        });
//        $routeProvider.when('/story/:id/chapter/new', {
//            templateUrl:'templates/story/storyblocks/chapter.html',
//            controller: 'chapterController',
//            resolve: {
//                data: function($route){
//                    return $route.current.params.id;
//                }
//            }
//        });


        $routeProvider.when('/', {
            templateUrl:'templates/homepage.html',
            controller: 'HomeController'
        });
        $routeProvider.otherwise({
            templateUrl:'templates/homepage.html',
            controller: 'HomeController'
        });
    });




/*
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});

}]);
*/
