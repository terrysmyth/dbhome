 "use strict";

 angular.module("myApp")
     .controller('categoryCtrl', function($rootScope, $scope, $location, $firebaseObject, $window) {
         // Current User *********************************************************************
         var user = firebase.auth().currentUser;

         $scope.selectedCat = function(category) {
             console.log(category)
             $rootScope.chosenCategory = category;
             if (category == "dining") {
                 $rootScope.subCategories = [{
                         original: "south",
                         show: "South Plaza"
                     },
                     {
                         original: "north",
                         show: "North Plaza"
                     },
                     {
                         original: "online",
                         show: "Online Eating"
                     },
                     {
                         original: "private",
                         show: "Private Dining"
                     }
                 ]
             } else if (category == "spa") {
                 $rootScope.subCategories = [{
                         original: "hair",
                         show: "Hair Dressors"
                     },
                     {
                         original: "massage",
                         show: "Facials & Massage"
                     },
                     {
                         original: "makeup",
                         show: "Makeup and Hair"
                     }
                 ]
             } else if (category == "kidsEdu") {
                 $rootScope.subCategories = [{
                         original: "language",
                         show: "Languages"
                     },
                     {
                         original: "math",
                         show: "Math & Kumon"
                     },
                     {
                         original: "coding",
                         show: "Computer Sciences"
                     },
                     {
                         original: "art",
                         show: "Art & Performing"
                     },
                     {
                         original: "music",
                         show: "Music"
                     },
                     {
                         original: "tutor",
                         show: "Home Tutors"
                     }

                 ]

             } else if (category == "health") {
                 $rootScope.subCategories = null;

             } else if (category == "pets") {
                 $rootScope.subCategories = null;

             } else if (category == "luxury") {
                 $rootScope.subCategories = null;

             } else if (category == "community") {
                 $rootScope.subCategories = null;

             } else if (category == "news") {
                 $rootScope.subCategories = null;

             } else if (category == "kidsSport") {
                 $rootScope.subCategories = [{
                         original: "tots",
                         show: "Babies & Tots"
                     },
                     {
                         original: "dance",
                         show: "Dance"
                     },
                     {
                         original: "fitness",
                         show: "Fitness"
                     },
                     {
                         original: "martial",
                         show: "Martial Arts"
                     },
                     {
                         original: "sport",
                         show: "Sports"
                     }

                 ]
             } else if (category == "kidsShops") {
                $rootScope.subCategories = null;
                
             }  else if (category == "photo") {
                $rootScope.subCategories = [{
                         original: "photo",
                         show: "Photography"
                     },
                     {
                         original: "art",
                         show: "Art"
                     }

                 ]
             }  else if (category == "adultsEdu") {
                 $rootScope.subCategories = [{
                         original: "language",
                         show: "Languages"
                     },
                     {
                         original: "coding",
                         show: "Computer Sciences"
                     },
                     {
                         original: "art",
                         show: "Art & Performing"
                     },
                     {
                         original: "music",
                         show: "Music"
                     },
                     {
                         original: "tutor",
                         show: "Home Tutors"
                     }

                 ]

             }  else if (category == "adultsSport") {
                 $rootScope.subCategories = [{
                         original: "yoga",
                         show: "Zumba & Yoga/Pilates"
                     },
                     {
                         original: "pt",
                         show: "Personal Trainer"
                     },
                     {
                         original: "martial",
                         show: "Martial Arts"
                     },
                     {
                         original: "shops",
                         show: "Shops"
                     },
                     {
                         original: "sport",
                         show: "Sport Teams/Sport Nights"
                     },
                     {
                         original: "dance",
                         show: "Dance"
                     },
                     {
                         original: "outdoor",
                         show: "Outdoors/Water Sports"
                     }

                 ]

             }
         }



     }) //END OF CNTRL