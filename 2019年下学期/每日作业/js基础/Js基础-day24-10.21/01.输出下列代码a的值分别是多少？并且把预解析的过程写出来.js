// 输出下列代码a的值分别是多少？并且把预解析的过程写出来
// var a = 25;
//  function abc() {
//    console.log(a);   // ?undefined
//   var  a = 10;
//  }
// abc();
// console.log(a)  //?25
//
//--------------------------------------
//
//     var a = 25;
//  function abc() {
//    var a
//    console.log(a);   // ?undefined
//   var a = 10;
//  }
// abc();
// console.log(a)  //?25

var color = "red";
   function outer() {
       var anotherColor = "blue";//
       function inner() {
           var tmpColor = color;   //red
           color = anotherColor; //blue
           anotherColor = tmpColor; // red
           console.log(anotherColor);     // ? 
       }
       inner();
   }
   outer();
   console.log(color);  // ?  