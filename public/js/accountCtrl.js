 "use strict";

 angular.module("myApp")
     .controller('accountCtrl', function($state, $rootScope, $scope, $location, $firebaseArray, $firebaseObject, $window) {

         // GOOGLE SIGNIN
         var provider = new firebase.auth.GoogleAuthProvider();
         // Google Login
         $scope.googleLogin = function() {
             firebase.auth().signInWithRedirect(provider);
             firebase.auth().getRedirectResult().then(function(result) {
                 console.log(result)
                 if (result.credential) {
                     // This gives you a Google Access Token. You can use it to access the Google API.
                     var token = result.credential.accessToken;
                     // ...
                 }
                 // The signed-in user info.
                 var user = result.user;
                 $window.location.href = '/#!/home'
             }).catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 // The email of the user's account used.
                 var email = error.email;
                 // The firebase.auth.AuthCredential type that was used.
                 var credential = error.credential;
                 console.log(errorCode)
                 // ...
             });
         }

         // NEW PROFILE
         $scope.createProfile = function(profile, user) {
             database.ref("users/" + user.uid).set({
                 name: profile.name,
                 email: profile.email,
                 company: profile.company,
                 phone: profile.phone,
                 role: "user",
                 uid: user.uid,
                 filter: {
                    adultsEdu: true,
                    dining: true,
                    kidsEdu: true,
                 }
             })
         }

         // PUBLISH COMPANY 
         $scope.publish = function(i, company, user) {
             database.ref("companies/" + company.name + "-" + company.owner + "/published").set(i);
             database.ref("users/" + company.owner + "/companies/" + company.name + "/published").set(i);
         }

         // CREATE PROMOTION 
         $scope.createPromo = function(promo, user) {
             //Get company categories 
             var giveCat = [];
             var promise1 = new Promise(function(resolve, reject) {
                 var getCategories = database.ref("users/" + promo.company.owner + "/companies/" + promo.company.name + "/category/");
                 getCategories = $firebaseArray(getCategories);
                 $scope.promoCategories = getCategories;
                 resolve($scope.promoCategories);
             });

             promise1.then(function(value) {
                 for (var i = 0; i < value.length; i++) {
                     giveCat.push(value[i].$id);
                 }
                 //PROMOTIONS NODE
                 database.ref("promotions/" + promo.day + "/" + promo.company.name + "-" + promo.company.owner + "/").set({
                     title: promo.title,
                     body: promo.body,
                     day: promo.day,
                     company: promo.company.name,
                     owner: promo.company.owner,
                     logoUrl: promo.company.logoUrl,
                     categories: giveCat
                 });
                 //USERS NODE
                 database.ref("companies/" + promo.company.name + "-" + promo.company.owner + "/" + "promotions/" + promo.day + "/").set({
                     title: promo.title,
                     body: promo.body,
                     day: promo.day,
                     company: promo.company.name,
                     owner: promo.company.owner,
                     logoUrl: promo.company.logoUrl,
                     categories: giveCat
                 });
                 $scope.newPromo = null;
             });



         }

         $scope.deletePromo = function(promo, user) {
             //Delete From both
             database.ref("promotions/" + promo.day + "/" + promo.company + "-" + promo.owner + "/").remove();
             database.ref("companies/" + promo.company + "-" + promo.owner + "/" + "promotions/" + promo.day + "/").remove();
         }

         // CREATE MONTHLY THINGY
         $scope.createMonth = function(promo, user) {
             //Get company categories 
             var giveCat = [];
             var promise1 = new Promise(function(resolve, reject) {
                 var getCategories = database.ref("users/" + promo.company.owner + "/companies/" + promo.company.name + "/category/");
                 getCategories = $firebaseArray(getCategories);
                 $scope.promoCategories = getCategories;
                 resolve($scope.promoCategories);
             });

             promise1.then(function(value) {
                 for (var i = 0; i < value.length; i++) {
                     giveCat.push(value[i].$id);
                 }
                 //PROMOTIONS NODE
                 database.ref("months/" + promo.month + "/" + promo.company.name + "-" + promo.company.owner + "/").set({
                     title: promo.title,
                     body: promo.body,
                     month: promo.month,
                     company: promo.company.name,
                     owner: promo.company.owner,
                     bckUrl: promo.company.backgroundUrl,
                     categories: giveCat
                 });
                 //USERS NODE
                 database.ref("companies/" + promo.company.name + "-" + promo.company.owner + "/" + "months/" + promo.month + "/").set({
                     title: promo.title,
                     body: promo.body,
                     month: promo.month,
                     company: promo.company.name,
                     owner: promo.company.owner,
                     bckUrl: promo.company.backgroundUrl,
                     categories: giveCat
                 });
                 $scope.newMonth = null;
             });

         }

         $scope.deleteMonth = function(promo, user) {
             //Delete From both
             database.ref("months/" + promo.month + "/" + promo.company + "-" + promo.owner + "/").remove();
             database.ref("companies/" + promo.company + "-" + promo.owner + "/" + "months/" + promo.month + "/").remove();
         }





     }) //END OF CNTRL