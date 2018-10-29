 angular.module("myApp")
     .controller('tcCtrl', function($rootScope, $scope, $location, $firebaseObject, $window) {


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
             document.getElementById('time2').innerHTML = h + ":" + m + ":" + s;
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
             [100, "01:00"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [650, "06:50"],
             [700, "07:00"],
             [710, "07:10"],
             [718, "07:18"],
             [725, "07:25"],
             [735, "07:35"],
             [747, "07:47"],
             [759, "07:59"],
             [811, "08:11"],
             [823, "08:23"],
             [835, "08:35"],
             [847, "08:47"],
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
             [1510, "15:10"],
             [1520, "15:20"],
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
             [1912, "19:12"],
             [1924, "19:24"],
             [1937, "19:37"],
             [1950, "19:50"],
             [2005, "20:05"],
             [2020, "20:20"],
             [2035, "20:35"],
             [2050, "20:50"],
             [2110, "21:10"],
             [2130, "21:30"],
             [2150, "21:50"],
             [2210, "22:10"],
             [2230, "22:30"],
             [2250, "22:50"],
             [2310, "23:10"],
             [2330, "23:30"],
             [0000, "00:00"],
             [30, "00:30"],
             [100, "01:00"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"]
         ];

         var dbSat = [
             [0000, "00:00"],
             [30, "00:30"],
             [100, "01:00"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [650, "06:50"],
             [702, "07:02"],
             [714, "07:14"],
             [726, "07:26"],
             [738, "07:38"],
             [750, "07:50"],
             [802, "08:02"],
             [814, "08:14"],
             [838, "08:38"],
             [850, "08:50"],
             [905, "09:05"],
             [920, "09:20"],
             [935, "09:35"],
             [950, "09:50"],
             [1005, "10:05"],
             [1020, "10:20"],
             [1035, "10:35"],
             [1050, "10:50"],
             [1105, "11:05"],
             [1120, "11:20"],
             [1135, "11:35"],
             [1150, "11:50"],
             [1205, "12:05"],
             [1220, "12:20"],
             [1235, "12:35"],
             [1250, "12:50"],
             [1305, "13:05"],
             [1320, "13:20"],
             [1335, "13:35"],
             [1350, "13:50"],
             [1405, "14:05"],
             [1420, "14:20"],
             [1435, "14:35"],
             [1450, "14:50"],
             [1505, "15:05"],
             [1520, "15:20"],
             [1535, "15:35"],
             [1550, "15:50"],
             [1605, "16:05"],
             [1620, "16:20"],
             [1635, "16:35"],
             [1650, "16:50"],
             [1702, "17:02"],
             [1714, "17:14"],
             [1726, "17:26"],
             [1738, "17:38"],
             [1750, "17:50"],
             [1802, "18:02"],
             [1814, "18:14"],
             [1826, "18:26"],
             [1838, "18:38"],
             [1850, "18:50"],
             [1902, "19:02"],
             [1914, "19:14"],
             [1926, "19:26"],
             [1938, "19:38"],
             [1950, "19:50"],
             [2005, "20:05"],
             [2020, "20:20"],
             [2035, "20:35"],
             [2050, "20:50"],
             [2110, "21:10"],
             [2130, "21:30"],
             [2150, "21:50"],
             [2210, "22:10"],
             [2230, "22:30"],
             [2250, "22:50"],
             [2310, "23:10"],
             [2330, "23:30"],
             [2350, "23:50"],
             [0000, "00:00"],
             [30, "00:30"],
             [100, "01:00"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"]
         ];

         var dbPub = [
             [10, "00:10"],
             [30, "00:30"],
             [100, "01:00"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"],
             [700, "07:00"],
             [720, "07:20"],
             [740, "07:40"],
             [800, "08:00"],
             [820, "08:20"],
             [840, "08:40"],
             [900, "09:00"],
             [920, "09:20"],
             [940, "09:40"],
             [1000, "10:00"],
             [1020, "10:20"],
             [1040, "10:40"],
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
             [1515, "15:10"],
             [1530, "15:30"],
             [1542, "15:42"],
             [1554, "15:54"],
             [1606, "16:06"],
             [1618, "16:18"],
             [1630, "16:30"],
             [1642, "16:42"],
             [1654, "16:54"],
             [1706, "17:06"],
             [1718, "17:18"],
             [1730, "17:30"],
             [1742, "17:42"],
             [1754, "17:54"],
             [1806, "18:06"],
             [1818, "18:18"],
             [1842, "18:42"],
             [1854, "18:54"],
             [1906, "19:06"],
             [1918, "19:18"],
             [1930, "19:30"],
             [1942, "19:42"],
             [1954, "19:54"],
             [2006, "20:06"],
             [2018, "20:18"],
             [2030, "20:30"],
             [2045, "20:45"],
             [2100, "21:00"],
             [2115, "21:15"],
             [2130, "21:30"],
             [2150, "21:50"],
             [2210, "22:10"],
             [2230, "22:30"],
             [2250, "22:50"],
             [2310, "23:10"],
             [2330, "23:30"],
             [10, "00:10"],
             [30, "00:30"],
             [100, "01:00"],
             [530, "05:30"],
             [600, "06:00"],
             [630, "06:30"]
         ];

         function setDBFerry() {
             if (day == 0 || hkPub.indexOf(todayP) != -1) {
                 for (var i = 0; i < dbPub.length; i++) {
                     if (parseInt(currentTime) < dbPub[i][0]) {
                         nextFerry = dbPub[i][0];
                         document.getElementById('nextTc').innerHTML = dbPub[i][1];
                         document.getElementById('nextTc2').innerHTML = dbPub[i + 1][1];
                         document.getElementById('nextTc3').innerHTML = dbPub[i + 2][1];
                         document.getElementById('nextTc4').innerHTML = dbPub[i + 3][1];
                         document.getElementById('nextTc5').innerHTML = dbPub[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextTc').innerHTML = dbPub[0][1];
                         document.getElementById('nextTc2').innerHTML = dbPub[0 + 1][1];
                         document.getElementById('nextTc3').innerHTML = dbPub[0 + 2][1];
                         document.getElementById('nextTc4').innerHTML = dbPub[0 + 3][1];
                         document.getElementById('nextTc5').innerHTML = dbPub[0 + 4][1];
                         document.getElementById('untilNextTc').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }

             } else if (day == 6) {

                 for (var i = 0; i < dbSat.length; i++) {
                     if (parseInt(currentTime) < dbSat[i][0]) {
                         nextFerry = dbSat[i][0];
                         document.getElementById('nextTc').innerHTML = dbSat[i][1];
                         document.getElementById('nextTc2').innerHTML = dbSat[i + 1][1];
                         document.getElementById('nextTc3').innerHTML = dbSat[i + 2][1];
                         document.getElementById('nextTc4').innerHTML = dbSat[i + 3][1];
                         document.getElementById('nextTc5').innerHTML = dbSat[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextTc').innerHTML = dbSat[0][1];
                         document.getElementById('nextTc2').innerHTML = dbSat[0 + 1][1];
                         document.getElementById('nextTc3').innerHTML = dbSat[0 + 2][1];
                         document.getElementById('nextTc4').innerHTML = dbSat[0 + 3][1];
                         document.getElementById('nextTc5').innerHTML = dbSat[0 + 4][1];
                         document.getElementById('untilNextTc').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }
             } else {
                 for (var i = 0; i < dbWd.length; i++) {

                     if (parseInt(currentTime) < dbWd[i][0]) {
                         nextFerry = dbWd[i][0];
                         document.getElementById('nextTc').innerHTML = dbWd[i][1];
                         document.getElementById('nextTc2').innerHTML = dbWd[i + 1][1];
                         document.getElementById('nextTc3').innerHTML = dbWd[i + 2][1];
                         document.getElementById('nextTc4').innerHTML = dbWd[i + 3][1];
                         document.getElementById('nextTc5').innerHTML = dbWd[i + 4][1];

                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextTc').innerHTML = dbWd[0][1];
                         document.getElementById('nextTc2').innerHTML = dbWd[0 + 1][1];
                         document.getElementById('nextTc3').innerHTML = dbWd[0 + 2][1];
                         document.getElementById('nextTc4').innerHTML = dbWd[0 + 3][1];
                         document.getElementById('nextTc5').innerHTML = dbWd[0 + 4][1];
                         document.getElementById('untilNextTc').innerHTML = 2360 - currentTime;
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
             [25, "00:25"],
             [55, "00:55"],
             [125, "01:25"],
             [555, "05:55"],
             [625, "06:25"],
             [655, "06:55"],
             [710, "07:10"],
             [720, "07:20"],
             [730, "07:30"],
             [738, "07:38"],
             [745, "07:45"],
             [755, "07:55"],
             [807, "08:07"],
             [819, "08:19"],
             [831, "08:31"],
             [843, "08:43"],
             [855, "08:55"],
             [907, "09:07"],
             [920, "09:20"],
             [935, "09:35"],
             [950, "09:50"],
             [1005, "10:05"],
             [1020, "10:20"],
             [1035, "10:35"],
             [1050, "10:50"],
             [1105, "11:05"],
             [1120, "11:20"],
             [1135, "11:35"],
             [1150, "11:50"],
             [1205, "12:05"],
             [1220, "12:20"],
             [1235, "12:35"],
             [1250, "12:50"],
             [1305, "13:05"],
             [1320, "13:20"],
             [1335, "13:35"],
             [1350, "13:50"],
             [1405, "14:05"],
             [1420, "14:20"],
             [1435, "14:35"],
             [1450, "14:50"],
             [1505, "15:05"],
             [1520, "15:20"],
             [1530, "15:30"],
             [1540, "15:40"],
             [1550, "15:50"],
             [1605, "16:05"],
             [1620, "16:20"],
             [1635, "16:35"],
             [1650, "16:50"],
             [1705, "17:05"],
             [1720, "17:20"],
             [1732, "17:32"],
             [1744, "17:44"],
             [1756, "17:56"],
             [1808, "18:08"],
             [1820, "18:20"],
             [1832, "18:32"],
             [1844, "18:44"],
             [1856, "18:56"],
             [1908, "19:08"],
             [1920, "19:20"],
             [1932, "19:32"],
             [1944, "19:44"],
             [1957, "19:57"],
             [2010, "20:10"],
             [2025, "20:25"],
             [2040, "20:40"],
             [2055, "20:55"],
             [2110, "21:10"],
             [2130, "21:30"],
             [2150, "21:50"],
             [2210, "22:10"],
             [2230, "22:30"],
             [2250, "22:50"],
             [2310, "23:10"],
             [2330, "23:30"],
             [2355, "23:55"],
             [25, "00:25"],
             [55, "00:55"],
             [125, "01:25"],
             [555, "05:30"],
             [625, "06:00"],
             [655, "06:30"]
         ];

         var cnSat = [
             [30, "00:30"],
             [55, "00:55"],
             [125, "01:25"],
             [555, "05:55"],
             [625, "06:25"],
             [655, "06:55"],
             [710, "07:10"],
             [722, "07:20"],
             [734, "07:30"],
             [746, "07:38"],
             [758, "07:45"],
             [810, "08:07"],
             [822, "08:19"],
             [834, "08:31"],
             [846, "08:43"],
             [858, "08:55"],
             [910, "09:07"],
             [925, "09:20"],
             [940, "09:35"],
             [955, "09:50"],
             [1010, "10:05"],
             [1025, "10:20"],
             [1040, "10:35"],
             [1055, "10:50"],
             [1110, "11:05"],
             [1125, "11:20"],
             [1140, "11:35"],
             [1155, "11:50"],
             [1210, "12:05"],
             [1225, "12:20"],
             [1240, "12:35"],
             [1255, "12:50"],
             [1310, "13:05"],
             [1325, "13:20"],
             [1340, "13:35"],
             [1355, "13:50"],
             [1410, "14:05"],
             [1425, "14:20"],
             [1440, "14:35"],
             [1455, "14:50"],
             [1510, "15:05"],
             [1525, "15:20"],
             [1540, "15:30"],
             [1555, "15:40"],
             [1610, "16:05"],
             [1625, "16:20"],
             [1640, "16:35"],
             [1655, "16:50"],
             [1710, "17:05"],
             [1722, "17:20"],
             [1734, "17:32"],
             [1746, "17:44"],
             [1758, "17:56"],
             [1810, "18:08"],
             [1822, "18:20"],
             [1834, "18:32"],
             [1846, "18:44"],
             [1858, "18:56"],
             [1910, "19:08"],
             [1922, "19:20"],
             [1934, "19:32"],
             [1946, "19:44"],
             [1958, "19:57"],
             [2010, "20:10"],
             [2025, "20:25"],
             [2040, "20:40"],
             [2055, "20:55"],
             [2110, "21:10"],
             [2130, "21:30"],
             [2150, "21:50"],
             [2210, "22:10"],
             [2230, "22:30"],
             [2250, "22:50"],
             [2310, "23:10"],
             [2330, "23:30"],
             [2350, "23:50"],
             [30, "00:30"],
             [55, "00:55"],
             [125, "01:25"],
             [555, "05:55"],
             [625, "06:25"],
             [655, "06:55"]
         ];

         var cnPub = [
             [25, "00:25"],
             [55, "00:55"],
             [125, "01:25"],
             [555, "05:55"],
             [625, "06:25"],
             [655, "06:55"],
             [720, "07:10"],
             [740, "07:20"],
             [800, "08:00"],
             [820, "08:20"],
             [840, "08:40"],
             [900, "09:00"],
             [920, "09:20"],
             [940, "09:40"],
             [1000, "10:00"],
             [1020, "10:20"],
             [1040, "10:40"],
             [1100, "11:00"],
             [1120, "11:20"],
             [1135, "11:30"],
             [1150, "11:50"],
             [1205, "12:00"],
             [1220, "12:20"],
             [1235, "12:35"],
             [1250, "12:50"],
             [1305, "13:05"],
             [1320, "13:20"],
             [1335, "13:35"],
             [1350, "13:50"],
             [1405, "14:05"],
             [1420, "14:20"],
             [1435, "14:35"],
             [1450, "14:50"],
             [1505, "15:05"],
             [1520, "15:20"],
             [1535, "15:35"],
             [1550, "15:50"],
             [1602, "16:02"],
             [1614, "16:14"],
             [1626, "16:26"],
             [1638, "16:38"],
             [1650, "16:50"],
             [1702, "17:02"],
             [1714, "17:14"],
             [1726, "17:26"],
             [1738, "17:38"],
             [1750, "17:50"],
             [1802, "18:02"],
             [1814, "18:14"],
             [1826, "18:26"],
             [1838, "18:38"],
             [1850, "18:50"],
             [1902, "19:02"],
             [1914, "19:14"],
             [1926, "19:26"],
             [1938, "19:38"],
             [1950, "19:50"],
             [2002, "20:02"],
             [2014, "20:14"],
             [2026, "20:26"],
             [2038, "20:38"],
             [2050, "20:50"],
             [2105, "21:05"],
             [2120, "21:20"],
             [2135, "21:35"],
             [2150, "21:50"],
             [2210, "22:10"],
             [2230, "22:30"],
             [2250, "22:50"],
             [2310, "23:10"],
             [2330, "23:30"],
             [2355, "23:55"],
             [30, "00:30"],
             [55, "00:55"],
             [125, "01:25"],
             [555, "05:55"],
             [625, "06:25"],
             [655, "06:55"]
         ];

         function setCentralFerry() {
             if (day == 0 || hkPub.indexOf(todayP) != -1) {
                 for (var i = 0; i < cnPub.length; i++) {
                     if (parseInt(currentTime) < cnPub[i][0]) {
                         nextFerryC = cnPub[i][0];
                         document.getElementById('nextTcC').innerHTML = cnPub[i][1];
                         document.getElementById('nextTcC2').innerHTML = cnPub[i + 1][1];
                         document.getElementById('nextTcC3').innerHTML = cnPub[i + 2][1];
                         document.getElementById('nextTcC4').innerHTML = cnPub[i + 3][1];
                         document.getElementById('nextTcC5').innerHTML = cnPub[i + 4][1];
                         break;

                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextTcC').innerHTML = cnPub[0][1];
                         document.getElementById('nextTcC2').innerHTML = cnPub[0 + 1][1];
                         document.getElementById('nextTcC3').innerHTML = cnPub[0 + 2][1];
                         document.getElementById('nextTcC4').innerHTML = cnPub[0 + 3][1];
                         document.getElementById('nextTcC5').innerHTML = cnPub[0 + 4][1];
                         document.getElementById('untilTcC').innerHTML = 2360 - currentTime;
                         break;

                     }

                 }

             } else if (day == 6) {

                 for (var i = 0; i < cnSat.length; i++) {
                     if (parseInt(currentTime) < cnSat[i][0]) {
                         nextFerryC = cnSat[i][0];
                         document.getElementById('nextTcC').innerHTML = cnSat[i][1];
                         document.getElementById('nextTcC2').innerHTML = cnSat[i + 1][1];
                         document.getElementById('nextTcC3').innerHTML = cnSat[i + 2][1];
                         document.getElementById('nextTcC4').innerHTML = cnSat[i + 3][1];
                         document.getElementById('nextTcC5').innerHTML = cnSat[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextTcC').innerHTML = cnSat[0][1];
                         document.getElementById('nextTcC2').innerHTML = cnSat[0 + 1][1];
                         document.getElementById('nextTcC3').innerHTML = cnSat[0 + 2][1];
                         document.getElementById('nextTcC4').innerHTML = cnSat[0 + 3][1];
                         document.getElementById('nextTcC5').innerHTML = cnSat[0 + 4][1];
                         document.getElementById('untilNextTcC').innerHTML = 2360 - currentTime;
                         break;
                     }

                 }
             } else {
                 for (var i = 0; i < cnWd.length; i++) {
                     if (parseInt(currentTime) < cnWd[i][0]) {
                         nextFerryC = cnWd[i][0];
                         document.getElementById('nextTcC').innerHTML = cnWd[i][1];
                         document.getElementById('nextTcC2').innerHTML = cnWd[i + 1][1];
                         document.getElementById('nextTcC3').innerHTML = cnWd[i + 2][1];
                         document.getElementById('nextTcC4').innerHTML = cnWd[i + 3][1];
                         document.getElementById('nextTcC5').innerHTML = cnWd[i + 4][1];
                         break;
                     } else if (parseInt(currentTime) > 2329) {
                         document.getElementById('nextTcC').innerHTML = cnWd[0][1];
                         document.getElementById('nextTcC2').innerHTML = cnWd[0 + 1][1];
                         document.getElementById('nextTcC3').innerHTML = cnWd[0 + 2][1];
                         document.getElementById('nextTcC4').innerHTML = cnWd[0 + 3][1];
                         document.getElementById('nextTcC5').innerHTML = cnWd[0 + 4][1];
                         document.getElementById('untilNextTcC').innerHTML = 2360 - currentTime;
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

                 document.getElementById('untilNextTc').innerHTML = ferryTime - cTime;


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

                 document.getElementById('untilNextTcC').innerHTML = ferryTimeC - cTimeC;


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

         document.getElementById('fromDbTcTT').innerHTML = fromDBTT;


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

         document.getElementById('fromTcTT').innerHTML = fromCNTRLTT;

     }) //END OF CNTRL