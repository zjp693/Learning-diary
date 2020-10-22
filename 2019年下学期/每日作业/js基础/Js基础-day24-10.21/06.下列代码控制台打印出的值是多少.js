// //下列代码控制台打印出的值是多少？并且把预解析的过程写出来
// var a = 25;
//   (function d (num) {
//         console.log(num); // ？100
//         var num = 10;
//       console.log(num);  // ?10
//     }(100))
// //------------------------------
// var a
//     a = 25
//   (function d (num) {
//         console.log(num); // ？100
//         var num
//          num = 10;
//       console.log(num);  // ?10
//     }(100))