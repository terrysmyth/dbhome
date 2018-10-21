 "use strict";

 angular.module("myApp")

     .controller('newsCtrl', function($sce, $state, $rootScope, $scope, $location, $firebaseArray, $firebaseObject, $window) {

         // GET ALL NEWS 
         var articles = firebase.database().ref('articles/');
         var getArticles = $firebaseArray(articles);
         $scope.articles = getArticles;


         // GET DATE 
         const articleDate = new Date;
         const day = articleDate.getDate();
         const month = articleDate.getMonth();
         const year = articleDate.getFullYear();

         let file;
         $scope.readyImg = function() {
             // RESIZE LOGO
             let fileButton = document.getElementById('file1');
             file;
             // Listen for file selection
             fileButton.addEventListener("change", function() {
                 console.log("SDF")
                 file = fileButton.files[0];
                 // RESIZING!
                 ImageTools.resize(this.files[0], {
                     width: 1000, // maximum width
                     height: 1000 // maximum height
                 }, function(blob, didItResize) {
                     // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
                     var url = window.URL.createObjectURL(blob);
                     document.getElementById('previewImg').style.backgroundImage = "url(" + url + ")";
                     // you can also now upload this blob using an XHR.
                     file = blob;

                 });

             });
         }

         // SAVE NEW COMPANY
         $scope.createArticle = (article, profile, user) => {
             var storageRef = firebase.storage().ref();
             // UPLOAD IMAGE FIRST
             var uploadTask = storageRef.child('articles/' + article.title + "-" + user.uid).put(file);

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
                     submitArticle(downloadURL, article, profile, user);
                 });

             });
         }

         const submitArticle = (backgroundUrl, article, profile, user) => {

             try {
                 console.log("articles/" + article.title + "-" + user.uid + "/");
                 database.ref("articles/" + article.title + "-" + user.uid + "/").set({
                     author: profile.name,
                     date: `${day}-${month}-${year}`,
                     title: article.title,
                     subtitle: article.subtitle,
                     body: article.article,
                     backgroundUrl: backgroundUrl,
                     owner: user.uid,
                     published: false
                 });
                 $window.location.href = '/#!/home';
             } catch (error) {
                 console.log(error)
                 alertify.notify("File not loaded", 'error', 5, function() { console.log('dismissed'); });

             }
         }

         // DELETE ARTICLE
         $scope.deleteArticle = function(article, user) {
             var storageRef = firebase.storage().ref();

             alertify.confirm('Delete Article', 'Are you sure you want to delete this article?', function() {
                 alertify.success('Ok');
                 database.ref("articles/" + article.title + "-" + user.uid + "/").remove();
                 var deleteRef = storageRef.child('articles/' + article.title + "-" + user.uid);
                 deleteRef.delete().then(function() {
                     console.log("image deleted");
                 }).catch(function(error) {
                     console.log("image NOT deleted");
                     console.log(error);
                 });
                 $window.location.href = '/#!/home';
             }, function() {
                 alertify.error('Cancel');
             });

         }

         // SELECTED ARTICLE
         $scope.selectArticle = function(article) {
         	$rootScope.selectedArticle = article; 
         	$rootScope.selectedArticle.body = $sce.trustAsHtml(article.body);
         }



     }) //END OF CNTRL