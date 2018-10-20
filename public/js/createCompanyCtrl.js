 "use strict";

 angular.module("myApp")
     .controller('createCompanyCtrl', function($rootScope, $scope, $location, $firebaseObject, $window) {
         // Current User *********************************************************************
         var user = firebase.auth().currentUser;

         let file;
         let file2;
         let downloadLogo;
         let downloadBackground;
         let newCompanyO = {};
         $scope.readyImg = function() {
             // RESIZE LOGO
             let fileButton = document.getElementById('imageFile1');
             file;
             // Listen for file selection
             fileButton.addEventListener("change", function() {
                 console.log("SDF")
                 file = fileButton.files[0];
                 // RESIZING!
                 ImageTools.resize(this.files[0], {
                     width: 500, // maximum width
                     height: 500 // maximum height
                 }, function(blob, didItResize) {
                     // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
                     var url = window.URL.createObjectURL(blob);
                     document.getElementById('previewLogo').style.backgroundImage = "url(" + url + ")";
                     // you can also now upload this blob using an XHR.
                     file = blob;

                 });

             });

             // RESIZE IMAGE
             let fileButton2 = document.getElementById('imageFile2');
             file2;
             // Listen for file selection
             fileButton2.addEventListener("change", function() {
                 file2 = fileButton2.files[0];
                 // RESIZING!
                 ImageTools.resize(this.files[0], {
                     width: 900, // maximum width
                     height: 900 // maximum height
                 }, function(blob, didItResize) {
                     // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
                     var url = window.URL.createObjectURL(blob);
                     document.getElementById('preview').style.backgroundImage = "url(" + url + ")";
                     // you can also now upload this blob using an XHR.
                     file2 = blob;

                 });

             });
         }


         // SAVE NEW COMPANY
         $scope.saveCompany = (company) => {
             var storageRef = firebase.storage().ref();
             // UPLOAD IMAGE FIRST
             var uploadTask = storageRef.child('companies/' + company.name + "-" + user.uid + "/logo/").put(file);

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
                     nextFunction(downloadURL, company);
                 });

             });
         }

         const nextFunction = (logoUrl, company) => {
             var storageRef = firebase.storage().ref();
             var uploadTask2 = storageRef.child('companies/' + company.name + "-" + user.uid + "/background/").put(file2);
             uploadTask2.on('state_changed', function(snapshot) {
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
                 uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                     console.log('File available at', downloadURL);
                     finalFunction(logoUrl, downloadURL, company);
                 });

             });
         }

         const finalFunction = (logoUrl, backgroundUrl, company) => {
             if (!company.facebook) {
                 company.facebook = "-";
             }
             if (!company.instagram) {
                 company.instagram = "-";
             }
             if (!company.website) {
                 company.website = "-";
             }
             if (!company.address) {
                 company.address = "-";
             }
             if (!company.subCategory) {
                 company.subCategory = [];
             }

             newCompanyO.name = company.name;
             newCompanyO.email = company.email;
             newCompanyO.phone = company.phone;
             newCompanyO.address = company.address;
             newCompanyO.website = company.website;
             newCompanyO.facebook = company.facebook;
             newCompanyO.instagram = company.instagram;
             newCompanyO.description = company.description;
             newCompanyO.category = company.category;
             newCompanyO.subCategory = company.subCategory;
             newCompanyO.logoUrl = logoUrl;
             newCompanyO.backgroundUrl = backgroundUrl;
             newCompanyO.owner = user.uid;
             newCompanyO.published = false;
             newCompanyO.show = true;

             database.ref("companies/" + company.name + "-" + user.uid + "/").set(newCompanyO);
             database.ref("users/" + user.uid + "/companies/" + company.name + "/").set(newCompanyO);
             $window.location.href = '/#!/home'
         }







     }) //END OF CNTRL