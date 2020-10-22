//求任意2个正数的最大公约数和最小公倍数。
// var a=2
// var b=6
// var max= a>b?a:b
// for (var i = max; i <= a * b; i++) {
//     if (i % a == 0 && i % b == 0) {
//         console.log(i);
//         break;
//     }
// }
// var a=2
// var b=6
// var min= a>b?a:b
// for (var i = min; i > 0; i--) {
//     if (a % i == 0 && b % i == 0) {
//         console.log(i);
//         break;
//     }
// }
var min =225
var max =125
var a=1
var min1=min
var max1=max
while(a !=0){
    a=max%min
    max=min
    min=a
}console.log(max);
console.log(min1*max1/max);

