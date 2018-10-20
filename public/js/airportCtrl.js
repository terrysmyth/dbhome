 angular.module("myApp")
     .controller('airportCtrl', function($rootScope, $scope, $location, $firebaseObject, $window) {
         var today;
         var h;
         var m;
         var s;
         var day;
         var currentTime;


         function checkTime(i) {
             if (i < 10) {
                 i = "0" + i;
             }
             return i;
         }

         function startTime() {
             today = new Date();
             h = today.getHours();
             m = today.getMinutes();
             s = today.getSeconds();
             day = today.getDay();
             // add a zero in front of numbers<10
             m = checkTime(m);
             s = checkTime(s);
             currentTime = h + "" + m + "";
             document.getElementById('airportTime').innerHTML = h + ":" + m + ":" + s;
             t = setTimeout(function() {
                 startTime()
             }, 500);
         }
         startTime();


         // PUBLIC HOLIDAYS
         var dd = today.getDate();
         var mm = today.getMonth() + 1; //January is 0!

         var todayP = dd + '/' + mm;

         var hkPub = [
             "01/1",
             "02/1",
             "28/1",
             "30/1",
             "31/1",
             "02/4",
             "05/4",
             "01/5",
             "22/5",
             "18/6",
             "02/7",
             "25/9",
             "01/10",
             "17/10",
             "25/12",
             "26/12"
         ];

         // FROM DB

         var dbWd = [
             [0000, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [200, "02:00 *B"],
             [300, "03:00 *B"],
             [400, "04:00 *B"],
             [500, "05:00 *B"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [700, "07:00"],
             [730, "07:30"],
             [800, "08:00"],
             [830, "08:30"],
             [900, "09:00"],
             [930, "09:30"],
             [1000, "10:00"],
             [1030, "10:30"],
             [1100, "11:00"],
             [1130, "11:30"],
             [1200, "12:00"],
             [1230, "12:30"],
             [1300, "13:00"],
             [1330, "13:30"],
             [1400, "14:00"],
             [1430, "14:30"],
             [1500, "15:00"],
             [1530, "15:30"],
             [1600, "16:00"],
             [1630, "16:30"],
             [1700, "17:00"],
             [1730, "17:30"],
             [1800, "18:00"],
             [1830, "18:30"],
             [1900, "19:00"],
             [1930, "19:30"],
             [2000, "20:00"],
             [2030, "20:30"],
             [2100, "21:00"],
             [2130, "21:30"],
             [2200, "22:00"],
             [2230, "22:30"],
             [2300, "23:00"],
             [2330, "23:30"],
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [200, "02:00 *B"],
             [300, "03:00 *B"],
             [400, "04:00 *B"]
         ];

         var dbSat = [
             [0000, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [200, "02:00 *B"],
             [300, "03:00 *B"],
             [400, "04:00 *B"],
             [500, "05:00 *B"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [700, "07:00"],
             [730, "07:30"],
             [800, "08:00"],
             [830, "08:30"],
             [900, "09:00"],
             [930, "09:30"],
             [1000, "10:00"],
             [1030, "10:30"],
             [1100, "11:00"],
             [1130, "11:30"],
             [1200, "12:00"],
             [1230, "12:30"],
             [1300, "13:00"],
             [1330, "13:30"],
             [1400, "14:00"],
             [1430, "14:30"],
             [1500, "15:00"],
             [1530, "15:30"],
             [1600, "16:00"],
             [1630, "16:30"],
             [1700, "17:00"],
             [1730, "17:30"],
             [1800, "18:00"],
             [1830, "18:30"],
             [1900, "19:00"],
             [1930, "19:30"],
             [2000, "20:00"],
             [2030, "20:30"],
             [2100, "21:00"],
             [2130, "21:30"],
             [2200, "22:00"],
             [2230, "22:30"],
             [2300, "23:00"],
             [2330, "23:30"],
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [200, "02:00 *B"],
             [300, "03:00 *B"],
             [400, "04:00 *B"]
         ];

         var dbPub = [
             [0000, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [200, "02:00 *B"],
             [300, "03:00 *B"],
             [400, "04:00 *B"],
             [500, "05:00 *B"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [700, "07:00"],
             [730, "07:30"],
             [800, "08:00"],
             [830, "08:30"],
             [900, "09:00"],
             [930, "09:30"],
             [1000, "10:00"],
             [1030, "10:30"],
             [1100, "11:00"],
             [1130, "11:30"],
             [1200, "12:00"],
             [1230, "12:30"],
             [1300, "13:00"],
             [1330, "13:30"],
             [1400, "14:00"],
             [1430, "14:30"],
             [1500, "15:00"],
             [1530, "15:30"],
             [1600, "16:00"],
             [1630, "16:30"],
             [1700, "17:00"],
             [1730, "17:30"],
             [1800, "18:00"],
             [1830, "18:30"],
             [1900, "19:00"],
             [1930, "19:30"],
             [2000, "20:00"],
             [2030, "20:30"],
             [2100, "21:00"],
             [2130, "21:30"],
             [2200, "22:00"],
             [2230, "22:30"],
             [2300, "23:00"],
             [2330, "23:30"],
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [200, "02:00 *B"],
             [300, "03:00 *B"],
             [400, "04:00 *B"]
         ];

         function setDBFerry() {
             if (day == 0 || hkPub.indexOf(todayP) != -1) {
                 for (var i = 0; i < dbPub.length; i++) {
                     if (parseInt(currentTime) < dbPub[i][0]) {
                         nextFerry = dbPub[i][0];
                         document.getElementById('nextAirport').innerHTML = dbPub[i][1];
                         document.getElementById('nextAirport2').innerHTML = dbPub[i + 1][1];
                         document.getElementById('nextAirport3').innerHTML = dbPub[i + 2][1];
                         document.getElementById('nextAirport4').innerHTML = dbPub[i + 3][1];
                         document.getElementById('nextAirport5').innerHTML = dbPub[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextAirport').innerHTML = dbPub[0][1];
                         document.getElementById('nextAirport2').innerHTML = dbPub[0 + 1][1];
                         document.getElementById('nextAirport3').innerHTML = dbPub[0 + 2][1];
                         document.getElementById('nextAirport4').innerHTML = dbPub[0 + 3][1];
                         document.getElementById('nextAirport5').innerHTML = dbPub[0 + 4][1];
                         document.getElementById('airportNextDb').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }

             } else if (day == 6) {

                 for (var i = 0; i < dbSat.length; i++) {
                     if (parseInt(currentTime) < dbSat[i][0]) {
                         nextFerry = dbSat[i][0];
                         document.getElementById('nextAirport').innerHTML = dbSat[i][1];
                         document.getElementById('nextAirport2').innerHTML = dbSat[i + 1][1];
                         document.getElementById('nextAirport3').innerHTML = dbSat[i + 2][1];
                         document.getElementById('nextAirport4').innerHTML = dbSat[i + 3][1];
                         document.getElementById('nextAirport5').innerHTML = dbSat[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextAirport').innerHTML = dbSat[0][1];
                         document.getElementById('nextAirport2').innerHTML = dbSat[0 + 1][1];
                         document.getElementById('nextAirport3').innerHTML = dbSat[0 + 2][1];
                         document.getElementById('nextAirport4').innerHTML = dbSat[0 + 3][1];
                         document.getElementById('nextAirport5').innerHTML = dbSat[0 + 4][1];
                         document.getElementById('airportNextDb').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }
             } else {
                 for (var i = 0; i < dbWd.length; i++) {

                     if (parseInt(currentTime) < dbWd[i][0]) {
                         nextFerry = dbWd[i][0];
                         document.getElementById('nextAirport').innerHTML = dbWd[i][1];
                         document.getElementById('nextAirport2').innerHTML = dbWd[i + 1][1];
                         document.getElementById('nextAirport3').innerHTML = dbWd[i + 2][1];
                         document.getElementById('nextAirport4').innerHTML = dbWd[i + 3][1];
                         document.getElementById('nextAirport5').innerHTML = dbWd[i + 4][1];

                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextAirport').innerHTML = dbWd[0][1];
                         document.getElementById('nextAirport2').innerHTML = dbWd[0 + 1][1];
                         document.getElementById('nextAirport3').innerHTML = dbWd[0 + 2][1];
                         document.getElementById('nextAirport4').innerHTML = dbWd[0 + 3][1];
                         document.getElementById('nextAirport5').innerHTML = dbWd[0 + 4][1];
                         document.getElementById('airportNextDb').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }

             };

             t = setTimeout(function() {
                 setDBFerry()
             }, 500);
         }

         setDBFerry();



         // FROM TC!!


         var cnWd = [
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [130, "01:30"],
             [230, "02:30 *B"],
             [330, "03:30 *B"],
             [430, "04:40 *B"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [700, "07:00"],
             [730, "07:30"],
             [800, "08:00"],
             [830, "08:30"],
             [900, "09:00"],
             [930, "09:30"],
             [1000, "10:00"],
             [1030, "10:30"],
             [1100, "11:00"],
             [1130, "11:30"],
             [1200, "12:00"],
             [1230, "12:30"],
             [1300, "13:00"],
             [1330, "13:30"],
             [1400, "14:00"],
             [1430, "14:30"],
             [1500, "15:00"],
             [1530, "15:30"],
             [1600, "16:00"],
             [1630, "16:30"],
             [1700, "17:00"],
             [1730, "17:30"],
             [1800, "18:00"],
             [1830, "18:30"],
             [1900, "19:00"],
             [1930, "19:30"],
             [2000, "20:00"],
             [2030, "20:30"],
             [2100, "21:00"],
             [2130, "21:30"],
             [2200, "22:00"],
             [2230, "22:30"],
             [2300, "23:00"],
             [2330, "23:30"],
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [130, "01:30"],
             [230, "02:30 *B"],
             [330, "03:30 *B"],
             [430, "04:40 *B"]

         ];

         var cnSat = [
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [130, "01:30"],
             [230, "02:30 *B"],
             [330, "03:30 *B"],
             [430, "04:40 *B"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [700, "07:00"],
             [730, "07:30"],
             [800, "08:00"],
             [830, "08:30"],
             [900, "09:00"],
             [930, "09:30"],
             [1000, "10:00"],
             [1030, "10:30"],
             [1100, "11:00"],
             [1130, "11:30"],
             [1200, "12:00"],
             [1230, "12:30"],
             [1300, "13:00"],
             [1330, "13:30"],
             [1400, "14:00"],
             [1430, "14:30"],
             [1500, "15:00"],
             [1530, "15:30"],
             [1600, "16:00"],
             [1630, "16:30"],
             [1700, "17:00"],
             [1730, "17:30"],
             [1800, "18:00"],
             [1830, "18:30"],
             [1900, "19:00"],
             [1930, "19:30"],
             [2000, "20:00"],
             [2030, "20:30"],
             [2100, "21:00"],
             [2130, "21:30"],
             [2200, "22:00"],
             [2230, "22:30"],
             [2300, "23:00"],
             [2330, "23:30"],
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [130, "01:30"],
             [230, "02:30 *B"],
             [330, "03:30 *B"],
             [430, "04:40 *B"]
         ];

         var cnPub = [
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [130, "01:30"],
             [230, "02:30 *B"],
             [330, "03:30 *B"],
             [430, "04:40 *B"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [700, "07:00"],
             [730, "07:30"],
             [800, "08:00"],
             [830, "08:30"],
             [900, "09:00"],
             [930, "09:30"],
             [1000, "10:00"],
             [1030, "10:30"],
             [1100, "11:00"],
             [1130, "11:30"],
             [1200, "12:00"],
             [1230, "12:30"],
             [1300, "13:00"],
             [1330, "13:30"],
             [1400, "14:00"],
             [1430, "14:30"],
             [1500, "15:00"],
             [1530, "15:30"],
             [1600, "16:00"],
             [1630, "16:30"],
             [1700, "17:00"],
             [1730, "17:30"],
             [1800, "18:00"],
             [1830, "18:30"],
             [1900, "19:00"],
             [1930, "19:30"],
             [2000, "20:00"],
             [2030, "20:30"],
             [2100, "21:00"],
             [2130, "21:30"],
             [2200, "22:00"],
             [2230, "22:30"],
             [2300, "23:00"],
             [2330, "23:30"],
             [00, "00:00"],
             [30, "00:30"],
             [100, "01:00 *B"],
             [130, "01:30"],
             [230, "02:30 *B"],
             [330, "03:30 *B"],
             [430, "04:40 *B"]
         ];

         function setCentralFerry() {
             if (day == 0 || hkPub.indexOf(todayP) != -1) {
                 for (var i = 0; i < cnPub.length; i++) {
                     if (parseInt(currentTime) < cnPub[i][0]) {
                         nextFerryC = cnPub[i][0];
                         document.getElementById('nextAirportC').innerHTML = cnPub[i][1];
                         document.getElementById('nextAirportC2').innerHTML = cnPub[i + 1][1];
                         document.getElementById('nextAirportC3').innerHTML = cnPub[i + 2][1];
                         document.getElementById('nextAirportC4').innerHTML = cnPub[i + 3][1];
                         document.getElementById('nextAirportC5').innerHTML = cnPub[i + 4][1];
                         break;

                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextAirportC').innerHTML = cnPub[0][1];
                         document.getElementById('nextAirportC2').innerHTML = cnPub[0 + 1][1];
                         document.getElementById('nextAirportC3').innerHTML = cnPub[0 + 2][1];
                         document.getElementById('nextAirportC4').innerHTML = cnPub[0 + 3][1];
                         document.getElementById('nextAirportC5').innerHTML = cnPub[0 + 4][1];
                         document.getElementById('airportNextC').innerHTML = 2360 - currentTime;
                         break;

                     }

                 }

             } else if (day == 6) {

                 for (var i = 0; i < cnSat.length; i++) {
                     if (parseInt(currentTime) < cnSat[i][0]) {
                         nextFerryC = cnSat[i][0];
                         document.getElementById('nextAirportC').innerHTML = cnSat[i][1];
                         document.getElementById('nextAirportC2').innerHTML = cnSat[i + 1][1];
                         document.getElementById('nextAirportC3').innerHTML = cnSat[i + 2][1];
                         document.getElementById('nextAirportC4').innerHTML = cnSat[i + 3][1];
                         document.getElementById('nextAirportC5').innerHTML = cnSat[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextAirportC').innerHTML = cnSat[0][1];
                         document.getElementById('nextAirportC2').innerHTML = cnSat[0 + 1][1];
                         document.getElementById('nextAirportC3').innerHTML = cnSat[0 + 2][1];
                         document.getElementById('nextAirportC4').innerHTML = cnSat[0 + 3][1];
                         document.getElementById('nextAirportC5').innerHTML = cnSat[0 + 4][1];
                         document.getElementById('airportNextC').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }
             } else {
                 for (var i = 0; i < cnWd.length; i++) {
                     if (parseInt(currentTime) < cnWd[i][0]) {
                         nextFerryC = cnWd[i][0];
                         document.getElementById('nextAirportC').innerHTML = cnWd[i][1];
                         document.getElementById('nextAirportC2').innerHTML = cnWd[i + 1][1];
                         document.getElementById('nextAirportC3').innerHTML = cnWd[i + 2][1];
                         document.getElementById('nextAirportC4').innerHTML = cnWd[i + 3][1];
                         document.getElementById('nextAirportC5').innerHTML = cnWd[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextAirportC').innerHTML = cnWd[0][1];
                         document.getElementById('nextAirportC2').innerHTML = cnWd[0 + 1][1];
                         document.getElementById('nextAirportC3').innerHTML = cnWd[0 + 2][1];
                         document.getElementById('nextAirportC4').innerHTML = cnWd[0 + 3][1];
                         document.getElementById('nextAirportC5').innerHTML = cnWd[0 + 4][1];
                         document.getElementById('airportNextC').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }

             };
             t = setTimeout(function() {
                 setCentralFerry()
             }, 500);
         }
         setCentralFerry()


         // CONVERT NEXTFERRY IN TO MINUTES
         var min;
         var hour;
         var ferryTime;
         var nextFerry;

         var cMin;
         var cHour;
         var cTime;

         var minC;
         var hourC;
         var ferryTimeC;
         var nextFerryC;

         var cMinC;
         var cHourC;
         var cTimeC;

         function setUntilTime() {

             // DB

             if (parseInt(currentTime) < 2330) {
                 min = nextFerry.toString().slice(-2);
                 cMin = currentTime.slice(-2);

                 if (nextFerry.toString().length == 2) {
                     hour = 0;
                     cHour = 0;

                 } else if (nextFerry.toString().length == 3) {
                     hour = nextFerry.toString().substring(0, 1);
                     cHour = currentTime.substring(0, 1);

                 } else {
                     hour = nextFerry.toString().substring(0, 2);
                     if (currentTime.toString().length == 3) {
                         cHour = currentTime.substring(0, 1);
                     } else {
                         cHour = currentTime.substring(0, 2);
                     };

                 };

                 ferryTime = parseInt(min) + parseInt(hour) * 60;


                 cTime = parseInt(cMin) + parseInt(cHour) * 60;

                 document.getElementById('airportNextDb').innerHTML = ferryTime - cTime;


                 // CENTRAL

                 cMinC = currentTime.slice(-2);
                 minC = nextFerryC.toString().slice(-2);

                 if (nextFerryC.toString().length == 2) {
                     hourC = 0;
                     cHourC = 0;

                 } else if (nextFerryC.toString().length == 3) {
                     hourC = nextFerryC.toString().substring(0, 1);
                     cHourC = currentTime.substring(0, 1);

                 } else {
                     hourC = nextFerryC.toString().substring(0, 2);
                     if (currentTime.toString().length == 3) {
                         cHourC = currentTime.substring(0, 1);
                     } else {
                         cHourC = currentTime.substring(0, 2);
                     };

                 };

                 ferryTimeC = parseInt(minC) + parseInt(hourC) * 60;
                 cTimeC = parseInt(cMinC) + parseInt(cHourC) * 60;

                 document.getElementById('airportNextC').innerHTML = ferryTimeC - cTimeC;


             };

             t = setTimeout(function() {
                 setUntilTime()
             }, 500);

         }

         setUntilTime();


         var fromDBTT = "<tbody>";

         if (day == 0 || hkPub.indexOf(todayP) != -1) {
             for (var i = 0; i < dbPub.length; i++) {
                 fromDBTT += "<tr><td>" + dbPub[i][1]; + "</td></tr>"

             }

         } else if (day == 6) {

             for (var i = 0; i < dbSat.length; i++) {

                 fromDBTT += "<tr><td>" + dbSat[i][1]; + "</td></tr>"
             }
         } else {
             for (var i = 0; i < dbWd.length; i++) {

                 fromDBTT += "<tr><td>" + dbWd[i][1]; + "</td></tr>"

             }

         };

         fromDBTT += "</tbody>";

         document.getElementById('airportDBTT').innerHTML = fromDBTT;


         var fromCNTRLTT = "<tbody>";

         if (day == 0 || hkPub.indexOf(todayP) != -1) {
             for (var i = 0; i < cnPub.length; i++) {
                 fromCNTRLTT += "<tr><td>" + cnPub[i][1]; + "</td></tr>"

             }

         } else if (day == 6) {

             for (var i = 0; i < cnSat.length; i++) {

                 fromCNTRLTT += "<tr><td>" + cnSat[i][1]; + "</td></tr>"
             }
         } else {
             for (var i = 0; i < cnWd.length; i++) {

                 fromCNTRLTT += "<tr><td>" + cnWd[i][1]; + "</td></tr>"

             }

         };

         fromCNTRLTT += "</tbody>";

         document.getElementById('airportCNTRLTT').innerHTML = fromCNTRLTT;

     }) //END OF CNTRL