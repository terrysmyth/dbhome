 "use strict";

 angular.module("myApp")
     .controller('propertyCtrl', function($http, $rootScope, $scope, $location, $firebaseObject, $window) {

         // GET DATA
         $http.get("https://spreadsheets.google.com/feeds/list/1fb2ypIwqjhdMCtIcSlgptZKUYhB4zPO4W2n7OrEt4wQ/od6/public/values?alt=json")
             .then(function(response) {
                 $scope.allProperty = response.data.feed.entry;
             });

             $scope.propertyFilter = {
                sale: true,
                rent: true,
                bedrooms: 2,
                bathrooms: 1
             }
                $scope.openProperty = false;

             $scope.selectProperty = function(property) {
                $scope.openProperty = true;
                $rootScope.selectedProperty = property;
             }

     }) //END OF CNTRL