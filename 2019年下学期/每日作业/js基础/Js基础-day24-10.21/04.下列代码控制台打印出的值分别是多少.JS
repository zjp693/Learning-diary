// //4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来

var color = "red";
function outer() {
    var anotherColor = "blud";
    function inner() {
        var tmpColor = color;//red
        color = anotherColor;//blud
        anotherColor = tmpColor;//red
        console.log(anotherColor); // red
    }
    inner();
}
outer();
console.log(color);  // red
// //-----------------------------------------------
// var a
// a = 25;
// var color
// color = "red";
// function outer() {
//     var anotherColor
//     anotherColor = "red";
//     function inner() {
//         var anotherColor
//         anotherColor = color;
//         color = anotherColor;
//         anotherColor = tmpColor;
//         console.log(anotherColor);     // red
//     }
//     inner();
// }
// outer();
// console.log(color);  // ?red