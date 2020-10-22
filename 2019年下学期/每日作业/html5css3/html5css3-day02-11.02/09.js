//录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
var num = 123
a = num % 10
b = parseInt(num / 10 % 10)
c = parseInt(num / 100 % 10)
console.log(`${a}${b}${c}`);
