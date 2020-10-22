// 1. 请将变量a与变量b的变量值互换位置

//     ```js
//    var a = 10, b = 20; // 互换使得b=10，a=20
var a = 10;
var b = 20;
var c = a;
var a = b;
var b = c;
console.log(a, b)