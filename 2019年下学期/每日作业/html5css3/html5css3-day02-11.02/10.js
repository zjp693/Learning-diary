//10.定义一个三位数，求各位数的平方和是多少，在控制台输出。
var num = 555
a = num % 10
b = parseInt(num / 10 % 10)
c = parseInt(num / 100 % 10)
d = a * a * a + b * b * b + c * c * c
console.log(d);
