//定义一个四位数，按逆序打印出各位数字。例如原数字为5678，应输出8765。
var num=5964
var a=parseInt(num%10)
var b=parseInt(num/10%10)
var c=parseInt(num/100%10)
var d=parseInt(num/1000%10)
console.log(`${a}`+`${b}`+`${c}`+`${d}`);
