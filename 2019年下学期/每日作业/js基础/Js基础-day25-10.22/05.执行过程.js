//列代码控制台打印出的值是多少？写出执行过程//
alert(a);    // ?
var a = '666';
function a(){ alert('我是函数') }
 alert(a);    // ?


 // 执行时的代码
// function a() { console.log('我是函数') }
// var a;
// console.log(a);    // function a(){ console.log('我是函数') }
// a = '666';
// console.log(a);    // 666

// 如果函数名和变量名相同的哈先提升函数名再提升变量名  所以先将函数a提升在最上面  然后再将变量a提升  第一个打印function a(){ console.log('我是函数') }这个函数   第二个打印666  因为a重新赋值后=66