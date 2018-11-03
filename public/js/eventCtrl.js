 "use strict";

 angular.module("myApp")
     .controller('eventCtrl', function($state, $rootScope, $scope, $location, $firebaseArray, $firebaseObject, $window) {

         // GET EVENTS
         var getEVents = firebase.database().ref('events');
         getEVents = $firebaseArray(getEVents);
         $scope.events = getEVents;

         $scope.eventMs = [
             "January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July",
             "August",
             "September",
             "Ocotber",
             "November",
             "December"
         ];

         let date = new Date();
         $scope.year = date.getFullYear();

         $scope.makeEvent = function(event, user) {
             let fYear = event.date.getFullYear();
             let fMonth = event.date.getMonth();
             let fDay = event.date.getDate();

             if (fMonth == 0) {
                 fMonth = "January";
             } else if (fMonth == 1) {
                 fMonth = "February";
             } else if (fMonth == 2) {
                 fMonth = "March";
             } else if (fMonth == 3) {
                 fMonth = "April";
             } else if (fMonth == 4) {
                 fMonth = "May";
             } else if (fMonth == 5) {
                 fMonth = "June";
             } else if (fMonth == 6) {
                 fMonth = "July";
             } else if (fMonth == 7) {
                 fMonth = "August";
             } else if (fMonth == 8) {
                 fMonth = "September";
             } else if (fMonth == 9) {
                 fMonth = "October";
             } else if (fMonth == 10) {
                 fMonth = "November";
             } else if (fMonth == 11) {
                 fMonth = "December";
             }

             const finalInput = {
                 date: `${fDay}-${fMonth}-${fYear}`,
                 year: fYear,
                 month: fMonth,
                 day: fDay,
                 title: event.title,
                 body: event.body,
                 link: event.link,
                 location: event.location,
                 owner: user.uid
             }

             alertify.confirm('Make Event?', 'Are you sure you want to create this event?', function() {
                 $scope.newEvent = null;
                 database.ref("events/" + fYear + "-" + fMonth + "-" + user.uid).set(finalInput);
                 alertify.success('Event Made!')
             }, function() {
                 alertify.error('Cancel')
             });


         }

         $scope.deleteEvent = function(event, user) {

         	alertify.confirm('Delete Event?', 'Are you sure you want to delete this event?', function() {
                 database.ref("events/" + event.year + "-" + event.month + "-" + event.owner).remove();
                 alertify.success('Event Deleted!')
             }, function() {
                 alertify.error('Cancel')
             });


         }

     }) //END OF CNTRL