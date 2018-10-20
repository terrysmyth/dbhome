 "use strict";

 angular.module("myApp")
     .controller('mainCtrl', function($state, $rootScope, $scope, $location, $firebaseArray, $firebaseObject, $window) {

         var getCompanies = firebase.database().ref('companies');
         getCompanies = $firebaseArray(getCompanies);
         $scope.companies = getCompanies;

         // SelectCOMPANY
         $scope.selectCompany = function(company) {
             $scope.selectedCompany = company;
         }

         $scope.selectPromo = function(companyName, companyOwner) {
             var selectedCompany = firebase.database().ref('companies/' + companyName + "-" + companyOwner + "/");
             selectedCompany = $firebaseObject(selectedCompany);
             selectedCompany.$bindTo($scope, "selectedCompany");
         }

         // GOTO
         let elmnt;
         $scope.goTo = function(i) {
             console.log(i)
             elmnt = document.getElementById(i);
             elmnt.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
         }

         // GET PROMOTIONS
         var getPromotions = firebase.database().ref('promotions/');
         getPromotions = $firebaseArray(getPromotions);
         $rootScope.promotions = getPromotions;
         // GET MONTH PROMOS
         var getMonthsP = firebase.database().ref('months/');
         getMonthsP = $firebaseArray(getMonthsP);
         $rootScope.months = getMonthsP;


         // Current User *********************************************************************
         var user = firebase.auth().currentUser;

         // ********** GET USER *******
         firebase.auth().onAuthStateChanged(function(user) {
             if (user) {
                 // User is signed in.
                 $rootScope.user = user;
                 // GET PROFILE
                 var getProfile = firebase.database().ref('users/' + user.uid);
                 getProfile = $firebaseObject(getProfile);
                 getProfile.$bindTo($rootScope, "profile");

                 // GET COMPANIES
                 var getCompanies = firebase.database().ref('users/' + user.uid + "/companies");
                 getCompanies = $firebaseArray(getCompanies);
                 $rootScope.profileCompanies = getCompanies;


                 // GO HOME
                 $window.location.href = '/#!/home'
             } else {
                 // No user is signed in.
                 $rootScope.user = null;
                 $rootScope.profile = null;
                 console.log("No user...");
             }
         });

         // LOG OUT
         $scope.logout = function() {


             alertify.confirm("Would you like to log out?",
                 function() {
                     firebase.auth().signOut().then(function() {
                         console.log('Logged out');
                         $rootScope.profile = null;
                     }).catch(function(error) {
                         alertify.error('Could log out!');
                         console.log(error)
                     });
                 },
                 function() {
                     alertify.error('Cancelled');
                 });

         };

         // UPDATE COMPANY
         $scope.updateCompany = function(newCompany, oldCompany, user) {
             let companyO = {};
             // FIRST
             if (!newCompany.name) {
                 companyO.name = oldCompany.name;
             } else {
                 companyO.name = newCompany.name;
             }
             if (!newCompany.phone) {
                 companyO.phone = oldCompany.phone;
             } else {
                 companyO.phone = newCompany.phone;
             }
             if (!newCompany.email) {
                 companyO.email = oldCompany.email;
             } else {
                 companyO.email = newCompany.email;
             }
             if (!newCompany.address) {
                 companyO.address = oldCompany.address;
             } else {
                 companyO.address = newCompany.address;
             }

             //SECOND
             if (!newCompany.description) {
                 companyO.description = oldCompany.description;
             } else {
                 companyO.description = newCompany.description;
             }
             if (!newCompany.website) {
                 companyO.website = oldCompany.website;
             } else {
                 companyO.website = newCompany.website;
             }
             if (!newCompany.facebook) {
                 companyO.facebook = oldCompany.facebook;
             } else {
                 companyO.facebook = newCompany.facebook;
             }
             if (!newCompany.instagram) {
                 companyO.instagram = oldCompany.instagram;
             } else {
                 companyO.instagram = newCompany.instagram;
             }

             // if (newCompany.published == false) {
             //     companyO.published = false;
             // } else {
             //     companyO.published = oldCompany.published;
             // }


             companyO.backgroundUrl = oldCompany.backgroundUrl;
             companyO.published = oldCompany.published;
             companyO.logoUrl = oldCompany.logoUrl;
             companyO.owner = oldCompany.owner;
             companyO.category = oldCompany.category;
             companyO.subCategory = oldCompany.subCategory;

             try {
                 // REMOVE AND SET in company list
                 database.ref("companies/" + oldCompany.name + "-" + user.uid).remove();
                 database.ref("companies/" + companyO.name + "-" + user.uid + "/").set(companyO);
                 // REMOVE AND SET in user list
                 database.ref("users/" + user.uid + "/companies/" + oldCompany.name).remove();
                 database.ref("users/" + user.uid + "/companies/" + companyO.name).set(companyO);
                 $state.go("home");

             } catch (err) {

                 console.log(err)

             }

         }

         //GET DAY OF WEEK
         let date = new Date();
         let day = date.getDay();
         if (day == 1) {
             $scope.getDay = "Monday";
         } else if (day == 2) {
             $scope.getDay = "Tuesday";
         } else if (day == 3) {
             $scope.getDay = "Wednesday";
         } else if (day == 4) {
             $scope.getDay = "Thursday";
         } else if (day == 5) {
             $scope.getDay = "Friday";
         } else if (day == 6) {
             $scope.getDay = "Saturday";
         } else if (day == 0) {
             $scope.getDay = "Sunday";
         }

         //GET DAY OF WEEK
         let month = date.getMonth();
         if (month == 0) {
             $scope.getMonth = "January";
         } else if (month == 1) {
             $scope.getMonth = "February";
         } else if (month == 2) {
             $scope.getMonth = "March";
         } else if (month == 3) {
             $scope.getMonth = "April";
         } else if (month == 4) {
             $scope.getMonth = "May";
         } else if (month == 5) {
             $scope.getMonth = "June";
         } else if (month == 6) {
             $scope.getMonth = "July";
         } else if (month == 7) {
             $scope.getMonth = "August";
         } else if (month == 8) {
             $scope.getMonth = "September";
         } else if (month == 9) {
             $scope.getMonth = "October";
         } else if (month == 10) {
             $scope.getMonth = "November";
         } else if (month == 11) {
             $scope.getMonth = "December";
         }


         // CHANGE IMAGES 
         let logoFile;
         let bckFile;
         let downloadLogo;
         let downloadBackground;
         let newCompanyO = {};
         $scope.readyLogo = function() {
             // RESIZE LOGO
             let fileButton = document.getElementById('newLogo');
             // Listen for file selection
             fileButton.addEventListener("change", function() {
                 console.log("SDF")
                 logoFile = fileButton.files[0];
                 // RESIZING!
                 ImageTools.resize(this.files[0], {
                     width: 500, // maximum width
                     height: 500 // maximum height
                 }, function(blob, didItResize) {
                     // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
                     var url = window.URL.createObjectURL(blob);
                     document.getElementById('selectedLogo').style.backgroundImage = "url(" + url + ")";
                     // you can also now upload this blob using an XHR.
                     logoFile = blob;
                     document.getElementById("commitLogo").style.display = "inline-block";
                 });

             });

             // RESIZE IMAGE
             let fileButton2 = document.getElementById('newBck');
             // Listen for file selection
             fileButton2.addEventListener("change", function() {
                 bckFile = fileButton2.files[0];
                 // RESIZING!
                 ImageTools.resize(this.files[0], {
                     width: 900, // maximum width
                     height: 900 // maximum height
                 }, function(blob1, didItResize) {
                     // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
                     var url = window.URL.createObjectURL(blob1);
                     document.getElementById('selectedBck').style.backgroundImage = "url(" + url + ")";
                     // you can also now upload this blob using an XHR.
                     bckFile = blob1;
                     document.getElementById("commitBck").style.display = "inline-block";
                 });

             });
         }

         // SAVE NEW COMPANY
         $scope.saveLogo = (company, user) => {
             document.getElementById("commitLogo").style.display = "none";

             var storageRef = firebase.storage().ref();
             // UPLOAD IMAGE FIRST
             var uploadTask = storageRef.child('companies/' + company.name + "-" + user.uid + "/logo").put(logoFile);

             uploadTask.on('state_changed', function(snapshot) {
                 // Observe state change events such as progress, pause, and resume
                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                 var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                 console.log('Upload is ' + progress + '% done');
                 switch (snapshot.state) {
                     case firebase.storage.TaskState.PAUSED: // or 'paused'
                         console.log('Upload is paused');
                         break;
                     case firebase.storage.TaskState.RUNNING: // or 'running'
                         console.log('Upload is running');
                         break;
                 }
             }, function(error) {
                 // Handle unsuccessful uploads
             }, function() {
                 // Handle successful uploads on complete
                 // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                 uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                     console.log('File available at', downloadURL);
                     database.ref("companies/" + company.name + "-" + user.uid + "/logoUrl").set(downloadURL);
                     database.ref("users/" + user.uid + "/companies/" + company.name + "/logoUrl").set(downloadURL);
                 });

             });
         }

         // SAVE NEW COMPANY
         $scope.saveBck = (company, user) => {
             document.getElementById("commitBck").style.display = "none";

             var storageRef = firebase.storage().ref();
             // UPLOAD IMAGE FIRST
             var uploadTask = storageRef.child('companies/' + company.name + "-" + user.uid + "/background").put(bckFile);

             uploadTask.on('state_changed', function(snapshot) {
                 // Observe state change events such as progress, pause, and resume
                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                 var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                 console.log('Upload is ' + progress + '% done');
                 switch (snapshot.state) {
                     case firebase.storage.TaskState.PAUSED: // or 'paused'
                         console.log('Upload is paused');
                         break;
                     case firebase.storage.TaskState.RUNNING: // or 'running'
                         console.log('Upload is running');
                         break;
                 }
             }, function(error) {
                 // Handle unsuccessful uploads
             }, function() {
                 // Handle successful uploads on complete
                 // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                 uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                     console.log('File available at', downloadURL);
                     database.ref("companies/" + company.name + "-" + user.uid + "/backgroundUrl").set(downloadURL);
                     database.ref("users/" + user.uid + "/companies/" + company.name + "/backgroundUrl").set(downloadURL);
                 });

             });
         }

         // DELETE COMPANY
         $scope.deleteCompany = function(company, user, profile) {
             alertify.confirm('Are you sure you want to delete this company?', function() {
                 var storageRef = firebase.storage().ref();
                 var deleteRef;
                 var deleteRef1;
                 alertify.success('Company Deleted');
                 if (profile.role == "admin") {
                     database.ref("companies/" + company.name + "-" + company.owner).remove();
                     database.ref("users/" + company.owner + "/companies/" + company.name).remove();
                     deleteRef = storageRef.child('companies/' + company.name + "-" + company.owner + "/logo");
                     deleteRef1 = storageRef.child('companies/' + company.name + "-" + company.owner + "/background");
                 } else {
                     database.ref("companies/" + company.name + "-" + user.uid).remove();
                     database.ref("users/" + user.uid + "/companies/" + company.name).remove();
                     deleteRef = storageRef.child('companies/' + company.name + "-" + user.uid + "/logo");
                     deleteRef1 = storageRef.child('companies/' + company.name + "-" + user.uid + "/background");
                 }

                 deleteRef.delete().then(function() {
                     console.log("image deleted");
                 }).catch(function(error) {
                     console.log("image NOT deleted");
                     console.log(error);
                 });
                 deleteRef1.delete().then(function() {
                     console.log("image deleted");
                 }).catch(function(error) {
                     console.log("image NOT deleted");
                     console.log(error);
                 });

                 database.ref("promotions/Monday/" + company.name + "-" + company.owner).remove();
                 database.ref("promotions/Tuesday/" + company.name + "-" + company.owner).remove();
                 database.ref("promotions/Wednesday/" + company.name + "-" + company.owner).remove();
                 database.ref("promotions/Thursday/" + company.name + "-" + company.owner).remove();
                 database.ref("promotions/Friday/" + company.name + "-" + company.owner).remove();
                 database.ref("promotions/Sunday/" + company.name + "-" + company.owner).remove();
                 database.ref("promotions/Saturday/" + company.name + "-" + company.owner).remove();
                 database.ref("months/January/" + company.name + "-" + company.owner).remove();
                 database.ref("months/February/" + company.name + "-" + company.owner).remove();
                 database.ref("months/March/" + company.name + "-" + company.owner).remove();
                 database.ref("months/April/" + company.name + "-" + company.owner).remove();
                 database.ref("months/May/" + company.name + "-" + company.owner).remove();
                 database.ref("months/June/" + company.name + "-" + company.owner).remove();
                 database.ref("months/July/" + company.name + "-" + company.owner).remove();
                 database.ref("months/August/" + company.name + "-" + company.owner).remove();
                 database.ref("months/September/" + company.name + "-" + company.owner).remove();
                 database.ref("months/October/" + company.name + "-" + company.owner).remove();
                 database.ref("months/November/" + company.name + "-" + company.owner).remove();
                 database.ref("months/December/" + company.name + "-" + company.owner).remove();

                 // GO HOME
                 $window.location.href = '/#!/home'
             }, function() {
                 alertify.error('Action Cancelled')
             });

         }


     }) //END OF CNTRL