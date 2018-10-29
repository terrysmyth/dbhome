 angular.module("myApp")
     .controller('sbCtrl', function($rootScope, $scope, $location, $firebaseObject, $window) {

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
             document.getElementById('time3').innerHTML = h + ":" + m + ":" + s;
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
             [05, "00:05"],
             [20, "00:20"],
             [615, "06:15"],
             [630, "06:30"],
             [643, "06:43"],
             [655, "06:55"],
             [705, "07:05"],
             [715, "07:15"],
             [725, "07:25"],
             [730, "07:30"],
             [735, "07:35"],
             [745, "07:45"],
             [755, "07:55"],
             [800, "08:00"],
             [805, "08:05"],
             [815, "08:15"],
             [820, "08:20"],
             [830, "08:30"],
             [840, "08:40"],
             [855, "08:55"],
             [900, "09:00"],
             [910, "09:10"],
             [925, "09:25"],
             [940, "09:40"],
             [955, "09:55"],
             [1010, "10:10"],
             [1025, "10:25"],
             [1040, "10:40"],
             [1100, "11:00"],
             [1120, "11:20"],
             [1140, "11:40"],
             [1200, "12:00"],
             [1220, "12:20"],
             [1240, "12:40"],
             [1300, "13:00"],
             [1320, "13:20"],
             [1340, "13:40"],
             [1400, "14:00"],
             [1420, "14:20"],
             [1440, "14:40"],
             [1500, "15:00"],
             [1520, "15:20"],
             [1540, "15:40"],
             [1600, "16:00"],
             [1620, "16:20"],
             [1640, "16:40"],
             [1700, "17:00"],
             [1710, "17:10"],
             [1720, "17:20"],
             [1730, "17:30"],
             [1740, "17:40"],
             [1750, "17:50"],
             [1800, "18:00"],
             [1810, "18:10"],
             [1820, "18:20"],
             [1830, "18:30"],
             [1840, "18:40"],
             [1850, "18:50"],
             [1900, "19:00"],
             [1912, "19:12"],
             [1924, "19:24"],
             [1936, "19:36"],
             [1948, "19:48"],
             [2000, "20:00"],
             [2012, "20:12"],
             [2024, "20:24"],
             [2036, "20:36"],
             [2048, "20:48"],
             [2100, "21:00"],
             [2115, "21:15"],
             [2130, "21:30"],
             [2145, "21:45"],
             [2200, "22:00"],
             [2215, "22:15"],
             [2230, "22:30"],
             [2245, "22:45"],
             [2300, "23:00"],
             [2312, "23:12"],
             [2325, "23:25"],
             [2337, "23:37"],
             [2350, "23:50"],
             [05, "00:05"],
             [20, "00:20"],
             [615, "06:315"],
             [630, "06:30"],
             [643, "06:43"],
             [655, "06:55"]

         ];

         var dbSat = [
             [00, "00:00"],
             [20, "00:20"],
             [615, "06:15"],
             [635, "06:35"],
             [655, "06:55"],
             [705, "07:05"],
             [715, "07:15"],
             [730, "07:30"],
             [745, "07:45"],
             [800, "08:00"],
             [815, "08:15"],
             [830, "08:30"],
             [845, "08:45"],
             [900, "09:00"],
             [915, "09:15"],
             [930, "09:30"],
             [945, "09:45"],
             [1000, "10:00"],
             [1015, "10:15"],
             [1030, "10:30"],
             [1045, "10:45"],
             [1100, "11:00"],
             [1115, "11:15"],
             [1130, "11:30"],
             [1145, "11:45"],
             [1200, "12:00"],
             [1215, "12:15"],
             [1230, "12:30"],
             [1245, "12:45"],
             [1300, "13:00"],
             [1315, "13:15"],
             [1330, "13:30"],
             [1345, "13:45"],
             [1400, "14:00"],
             [1415, "14:15"],
             [1430, "14:30"],
             [1445, "14:45"],
             [1500, "15:00"],
             [1515, "15:15"],
             [1530, "15:30"],
             [1545, "15:45"],
             [1600, "16:00"],
             [1615, "16:15"],
             [1630, "16:30"],
             [1645, "16:45"],
             [1700, "17:00"],
             [1712, "17:12"],
             [1724, "17:24"],
             [1736, "17:36"],
             [1748, "17:48"],
             [1800, "18:00"],
             [1812, "18:12"],
             [1824, "18:24"],
             [1836, "18:36"],
             [1848, "18:48"],
             [1900, "19:00"],
             [1915, "19:15"],
             [1930, "19:30"],
             [1945, "19:45"],
             [2000, "20:00"],
             [2015, "20:15"],
             [2030, "20:30"],
             [2045, "20:45"],
             [2100, "21:00"],
             [2115, "21:15"],
             [2130, "21:30"],
             [2145, "21:45"],
             [2200, "22:00"],
             [2215, "22:15"],
             [2230, "22:30"],
             [2245, "22:45"],
             [2300, "23:00"],
             [2315, "23:15"],
             [2330, "23:30"],
             [2345, "23:45"],
             [00, "00:00"],
             [20, "00:20"],
             [615, "06:15"],
             [635, "06:30"],
             [655, "06:55"]
         ];

         var dbPub = [
             [00, "00:00"],
             [20, "00:20"],
             [615, "06:15"],
             [635, "06:35"],
             [655, "06:55"],
             [705, "07:05"],
             [715, "07:15"],
             [730, "07:30"],
             [745, "07:45"],
             [800, "08:00"],
             [815, "08:15"],
             [830, "08:30"],
             [845, "08:45"],
             [900, "09:00"],
             [915, "09:15"],
             [930, "09:30"],
             [945, "09:45"],
             [1000, "10:00"],
             [1015, "10:15"],
             [1030, "10:30"],
             [1045, "10:45"],
             [1100, "11:00"],
             [1115, "11:15"],
             [1130, "11:30"],
             [1145, "11:45"],
             [1200, "12:00"],
             [1215, "12:15"],
             [1230, "12:30"],
             [1245, "12:45"],
             [1300, "13:00"],
             [1315, "13:15"],
             [1330, "13:30"],
             [1345, "13:45"],
             [1400, "14:00"],
             [1415, "14:15"],
             [1430, "14:30"],
             [1445, "14:45"],
             [1500, "15:00"],
             [1515, "15:15"],
             [1530, "15:30"],
             [1545, "15:45"],
             [1600, "16:00"],
             [1615, "16:15"],
             [1630, "16:30"],
             [1645, "16:45"],
             [1700, "17:00"],
             [1712, "17:12"],
             [1724, "17:24"],
             [1736, "17:36"],
             [1748, "17:48"],
             [1800, "18:00"],
             [1812, "18:12"],
             [1824, "18:24"],
             [1836, "18:36"],
             [1848, "18:48"],
             [1900, "19:00"],
             [1915, "19:15"],
             [1930, "19:30"],
             [1945, "19:45"],
             [2000, "20:00"],
             [2015, "20:15"],
             [2030, "20:30"],
             [2045, "20:45"],
             [2100, "21:00"],
             [2115, "21:15"],
             [2130, "21:30"],
             [2145, "21:45"],
             [2200, "22:00"],
             [2215, "22:15"],
             [2230, "22:30"],
             [2245, "22:45"],
             [2300, "23:00"],
             [2315, "23:15"],
             [2330, "23:30"],
             [2345, "23:45"],
             [00, "00:00"],
             [20, "00:20"],
             [615, "06:15"],
             [635, "06:30"],
             [655, "06:55"]
         ];

         function setDBFerry() {
             if (day == 0 || hkPub.indexOf(todayP) != -1) {
                 for (var i = 0; i < dbPub.length; i++) {
                     if (parseInt(currentTime) < dbPub[i][0]) {
                         nextSb = dbPub[i][0];
                         document.getElementById('nextSb').innerHTML = dbPub[i][1];
                         document.getElementById('nextSb2').innerHTML = dbPub[i + 1][1];
                         document.getElementById('nextSb3').innerHTML = dbPub[i + 2][1];
                         document.getElementById('nextSb4').innerHTML = dbPub[i + 3][1];
                         document.getElementById('nextSb5').innerHTML = dbPub[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextSb').innerHTML = dbPub[0][1];
                         document.getElementById('nextSb2').innerHTML = dbPub[0 + 1][1];
                         document.getElementById('nextSb3').innerHTML = dbPub[0 + 2][1];
                         document.getElementById('nextSb4').innerHTML = dbPub[0 + 3][1];
                         document.getElementById('nextSb5').innerHTML = dbPub[0 + 4][1];
                         document.getElementById('untilNexSb').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }

             } else if (day == 6) {

                 for (var i = 0; i < dbSat.length; i++) {
                     if (parseInt(currentTime) < dbSat[i][0]) {
                         nextSb = dbSat[i][0];
                         document.getElementById('nextSb').innerHTML = dbSat[i][1];
                         document.getElementById('nextSb2').innerHTML = dbSat[i + 1][1];
                         document.getElementById('nextSb3').innerHTML = dbSat[i + 2][1];
                         document.getElementById('nextSb4').innerHTML = dbSat[i + 3][1];
                         document.getElementById('nextSb5').innerHTML = dbSat[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextSb').innerHTML = dbSat[0][1];
                         document.getElementById('nextSb2').innerHTML = dbSat[0 + 1][1];
                         document.getElementById('nextSb3').innerHTML = dbSat[0 + 2][1];
                         document.getElementById('nextSb4').innerHTML = dbSat[0 + 3][1];
                         document.getElementById('nextSb5').innerHTML = dbSat[0 + 4][1];
                         document.getElementById('untilNexSb').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }
             } else {
                 for (var i = 0; i < dbWd.length; i++) {

                     if (parseInt(currentTime) < dbWd[i][0]) {
                         nextSb = dbWd[i][0];
                         document.getElementById('nextSb').innerHTML = dbWd[i][1];
                         document.getElementById('nextSb2').innerHTML = dbWd[i + 1][1];
                         document.getElementById('nextSb3').innerHTML = dbWd[i + 2][1];
                         document.getElementById('nextSb4').innerHTML = dbWd[i + 3][1];
                         document.getElementById('nextSb5').innerHTML = dbWd[i + 4][1];

                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextSb').innerHTML = dbWd[0][1];
                         document.getElementById('nextSb2').innerHTML = dbWd[0 + 1][1];
                         document.getElementById('nextSb3').innerHTML = dbWd[0 + 2][1];
                         document.getElementById('nextSb4').innerHTML = dbWd[0 + 3][1];
                         document.getElementById('nextSb5').innerHTML = dbWd[0 + 4][1];
                         document.getElementById('untilNextSb').innerHTML = 2360 - currentTime;
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
             [15, "00:15"],
             [32, "00:32"],
             [52, "00:52"],
             [112, "01:12"],
             [640, "06:40"],
             [655, "06:55"],
             [708, "07:08"],
             [720, "07:20"],
             [730, "07:30"],
             [740, "07:40"],
             [750, "07:50"],
             [755, "07:55"],
             [805, "08:05"],
             [815, "08:15"],
             [825, "08:25"],
             [830, "08:30"],
             [835, "08:35"],
             [840, "08:40"],
             [850, "08:50"],
             [900, "09:00"],
             [910, "09:10"],
             [920, "09:20"],
             [930, "09:30"],
             [940, "09:40"],
             [955, "09:55"],
             [1010, "10:10"],
             [1025, "10:25"],
             [1040, "10:40"],
             [1055, "10:55"],
             [1110, "11:10"],
             [1130, "11:30"],
             [1150, "11:50"],
             [1210, "12:10"],
             [1230, "12:30"],
             [1250, "12:50"],
             [1310, "13:10"],
             [1330, "13:30"],
             [1350, "13:50"],
             [1410, "14:10"],
             [1430, "14:30"],
             [1450, "14:50"],
             [1510, "15:10"],
             [1530, "15:30"],
             [1550, "15:50"],
             [1610, "16:10"],
             [1630, "16:30"],
             [1650, "16:50"],
             [1710, "17:10"],
             [1730, "17:30"],
             [1740, "17:40"],
             [1750, "17:50"],
             [1800, "18:00"],
             [1810, "18:10"],
             [1820, "18:20"],
             [1830, "18:30"],
             [1840, "18:40"],
             [1850, "18:50"],
             [1900, "19:00"],
             [1910, "19:10"],
             [1920, "19:20"],
             [1930, "19:30"],
             [1942, "19:42"],
             [1954, "19:54"],
             [2006, "20:06"],
             [2018, "20:18"],
             [2030, "20:30"],
             [2042, "20:42"],
             [2054, "20:54"],
             [2106, "21:06"],
             [2118, "21:18"],
             [2130, "21:30"],
             [2145, "21:45"],
             [2206, "22:06"],
             [2215, "22:15"],
             [2230, "22:30"],
             [2245, "22:45"],
             [2300, "23:00"],
             [2315, "23:15"],
             [2330, "23:30"],
             [2345, "23:45"],
             [00, "00:00"],
             [15, "00:15"],
             [32, "00:32"],
             [52, "00:52"],
             [112, "01:12"],
             [640, "06:40"]

         ];

         var cnSat = [
             [12, "00:12"],
             [32, "00:32"],
             [52, "00:52"],
             [112, "01:12"],
             [640, "06:40"],
             [700, "07:00"],
             [720, "07:20"],
             [735, "07:35"],
             [750, "07:50"],
             [800, "08:00"],
             [815, "08:15"],
             [830, "08:30"],
             [845, "08:45"],
             [900, "09:00"],
             [915, "09:15"],
             [930, "09:30"],
             [945, "09:45"],
             [1000, "10:00"],
             [1015, "10:15"],
             [1030, "10:30"],
             [1045, "10:45"],
             [1100, "11:00"],
             [1115, "11:15"],
             [1130, "11:30"],
             [1145, "11:45"],
             [1200, "12:00"],
             [1215, "12:15"],
             [1230, "12:30"],
             [1245, "12:45"],
             [1300, "13:00"],
             [1315, "13:15"],
             [1330, "13:30"],
             [1345, "13:45"],
             [1400, "14:00"],
             [1415, "14:15"],
             [1430, "14:30"],
             [1445, "14:45"],
             [1500, "15:00"],
             [1515, "15:15"],
             [1530, "15:30"],
             [1545, "15:45"],
             [1600, "16:00"],
             [1615, "16:15"],
             [1630, "16:30"],
             [1645, "16:45"],
             [1700, "17:00"],
             [1715, "17:15"],
             [1730, "17:30"],
             [1742, "17:42"],
             [1754, "17:54"],
             [1806, "18:06"],
             [1818, "18:18"],
             [1830, "18:30"],
             [1842, "18:42"],
             [1854, "18:54"],
             [1906, "19:06"],
             [1918, "19:18"],
             [1930, "19:30"],
             [1945, "19:45"],
             [2000, "20:00"],
             [2015, "20:15"],
             [2030, "20:30"],
             [2045, "20:45"],
             [2100, "21:00"],
             [2115, "21:15"],
             [2130, "21:30"],
             [2145, "21:45"],
             [2200, "22:00"],
             [2215, "22:15"],
             [2230, "22:30"],
             [2245, "22:45"],
             [2300, "23:00"],
             [2315, "23:15"],
             [2332, "23:30"],
             [2352, "23:45"],
             [12, "00:12"],
             [32, "00:32"],
             [52, "00:52"],
             [112, "01:12"],
             [640, "06:40"]
         ];

         var cnPub = [
             [12, "00:12"],
             [32, "00:32"],
             [52, "00:52"],
             [112, "01:12"],
             [640, "06:40"],
             [700, "07:00"],
             [720, "07:20"],
             [735, "07:35"],
             [750, "07:50"],
             [800, "08:00"],
             [815, "08:15"],
             [830, "08:30"],
             [845, "08:45"],
             [900, "09:00"],
             [915, "09:15"],
             [930, "09:30"],
             [945, "09:45"],
             [1000, "10:00"],
             [1015, "10:15"],
             [1030, "10:30"],
             [1045, "10:45"],
             [1100, "11:00"],
             [1115, "11:15"],
             [1130, "11:30"],
             [1145, "11:45"],
             [1200, "12:00"],
             [1215, "12:15"],
             [1230, "12:30"],
             [1245, "12:45"],
             [1300, "13:00"],
             [1315, "13:15"],
             [1330, "13:30"],
             [1345, "13:45"],
             [1400, "14:00"],
             [1415, "14:15"],
             [1430, "14:30"],
             [1445, "14:45"],
             [1500, "15:00"],
             [1515, "15:15"],
             [1530, "15:30"],
             [1545, "15:45"],
             [1600, "16:00"],
             [1615, "16:15"],
             [1630, "16:30"],
             [1645, "16:45"],
             [1700, "17:00"],
             [1715, "17:15"],
             [1730, "17:30"],
             [1742, "17:42"],
             [1754, "17:54"],
             [1806, "18:06"],
             [1818, "18:18"],
             [1830, "18:30"],
             [1842, "18:42"],
             [1854, "18:54"],
             [1906, "19:06"],
             [1918, "19:18"],
             [1930, "19:30"],
             [1945, "19:45"],
             [2000, "20:00"],
             [2015, "20:15"],
             [2030, "20:30"],
             [2045, "20:45"],
             [2100, "21:00"],
             [2115, "21:15"],
             [2130, "21:30"],
             [2145, "21:45"],
             [2200, "22:00"],
             [2215, "22:15"],
             [2230, "22:30"],
             [2245, "22:45"],
             [2300, "23:00"],
             [2315, "23:15"],
             [2332, "23:30"],
             [2352, "23:45"],
             [12, "00:12"],
             [32, "00:32"],
             [52, "00:52"],
             [112, "01:12"],
             [640, "06:40"]
         ];

         function setCentralFerry() {
             if (day == 0 || hkPub.indexOf(todayP) != -1) {
                 for (var i = 0; i < cnPub.length; i++) {
                     if (parseInt(currentTime) < cnPub[i][0]) {
                         nextSbC = cnPub[i][0];
                         document.getElementById('nextSbC').innerHTML = cnPub[i][1];
                         document.getElementById('nextSbC2').innerHTML = cnPub[i + 1][1];
                         document.getElementById('nextSbC3').innerHTML = cnPub[i + 2][1];
                         document.getElementById('nextSbC4').innerHTML = cnPub[i + 3][1];
                         document.getElementById('nextSbC5').innerHTML = cnPub[i + 4][1];
                         break;

                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextSbC').innerHTML = cnPub[0][1];
                         document.getElementById('nextSbC2').innerHTML = cnPub[0 + 1][1];
                         document.getElementById('nextSbC3').innerHTML = cnPub[0 + 2][1];
                         document.getElementById('nextSbC4').innerHTML = cnPub[0 + 3][1];
                         document.getElementById('nextSbC5').innerHTML = cnPub[0 + 4][1];
                         document.getElementById('untilNextSbC').innerHTML = 2360 - currentTime;
                         break;

                     }

                 }

             } else if (day == 6) {

                 for (var i = 0; i < cnSat.length; i++) {
                     if (parseInt(currentTime) < cnSat[i][0]) {
                         nextSbC = cnSat[i][0];
                         document.getElementById('nextSbC').innerHTML = cnSat[i][1];
                         document.getElementById('nextSbC2').innerHTML = cnSat[i + 1][1];
                         document.getElementById('nextSbC3').innerHTML = cnSat[i + 2][1];
                         document.getElementById('nextSbC4').innerHTML = cnSat[i + 3][1];
                         document.getElementById('nextSbC5').innerHTML = cnSat[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextSbC').innerHTML = cnSat[0][1];
                         document.getElementById('nextSbC2').innerHTML = cnSat[0 + 1][1];
                         document.getElementById('nextSbC3').innerHTML = cnSat[0 + 2][1];
                         document.getElementById('nextSbC4').innerHTML = cnSat[0 + 3][1];
                         document.getElementById('nextSbC5').innerHTML = cnSat[0 + 4][1];
                         document.getElementById('untilNextSbC').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }
             } else {
                 for (var i = 0; i < cnWd.length; i++) {
                     if (parseInt(currentTime) < cnWd[i][0]) {
                         nextSbC = cnWd[i][0];
                         document.getElementById('nextSbC').innerHTML = cnWd[i][1];
                         document.getElementById('nextSbC2').innerHTML = cnWd[i + 1][1];
                         document.getElementById('nextSbC3').innerHTML = cnWd[i + 2][1];
                         document.getElementById('nextSbC4').innerHTML = cnWd[i + 3][1];
                         document.getElementById('nextSbC5').innerHTML = cnWd[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextSbC').innerHTML = cnWd[0][1];
                         document.getElementById('nextSbC2').innerHTML = cnWd[0 + 1][1];
                         document.getElementById('nextSbC3').innerHTML = cnWd[0 + 2][1];
                         document.getElementById('nextSbC4').innerHTML = cnWd[0 + 3][1];
                         document.getElementById('nextSbC5').innerHTML = cnWd[0 + 4][1];
                         document.getElementById('untilNextSbC').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }

             };
             t = setTimeout(function() {
                 setCentralFerry()
             }, 500);
         }
         setCentralFerry()


         // CONVERT NEXTSb IN TO MINUTES
         var min;
         var hour;
         var ferryTime;
         var nextSb;

         var cMin;
         var cHour;
         var cTime;

         var minC;
         var hourC;
         var ferryTimeC;
         var nextSbC;

         var cMinC;
         var cHourC;
         var cTimeC;

         function setUntilTime() {

             // DB

             if (parseInt(currentTime) < 2330) {
                 min = nextSb.toString().slice(-2);
                 cMin = currentTime.slice(-2);

                 if (nextSb.toString().length == 2) {
                     hour = 0;
                     cHour = 0;

                 } else if (nextSb.toString().length == 3) {
                     hour = nextSb.toString().substring(0, 1);
                     cHour = currentTime.substring(0, 1);

                 } else {
                     hour = nextSb.toString().substring(0, 2);
                     if (currentTime.toString().length == 3) {
                         cHour = currentTime.substring(0, 1);
                     } else {
                         cHour = currentTime.substring(0, 2);
                     };

                 };

                 ferryTime = parseInt(min) + parseInt(hour) * 60;


                 cTime = parseInt(cMin) + parseInt(cHour) * 60;

                 document.getElementById('untilNextSb').innerHTML = ferryTime - cTime;


                 // CENTRAL

                 cMinC = currentTime.slice(-2);
                 minC = nextSbC.toString().slice(-2);

                 if (nextSbC.toString().length == 2) {
                     hourC = 0;
                     cHourC = 0;

                 } else if (nextSbC.toString().length == 3) {
                     hourC = nextSbC.toString().substring(0, 1);
                     cHourC = currentTime.substring(0, 1);

                 } else {
                     hourC = nextSbC.toString().substring(0, 2);
                     if (currentTime.toString().length == 3) {
                         cHourC = currentTime.substring(0, 1);
                     } else {
                         cHourC = currentTime.substring(0, 2);
                     };

                 };

                 ferryTimeC = parseInt(minC) + parseInt(hourC) * 60;
                 cTimeC = parseInt(cMinC) + parseInt(cHourC) * 60;

                 document.getElementById('untilNextSbC').innerHTML = ferryTimeC - cTimeC;


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

         document.getElementById('fromSbDbTT').innerHTML = fromDBTT;


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

         document.getElementById('fromSbTT').innerHTML = fromCNTRLTT;


     }) //END OF CNTRL