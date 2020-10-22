//定义一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
var a = 12345
var b = a % 10
var c = parseInt(a / 10 % 10)
var d = parseInt(a / 100 % 10)
var e = parseInt(a / 1000 % 10)
var f = parseInt(a / 10000 % 10)
if (b == f && c == e) { console.log(a + '是回文数'); }
else { console.log(a + '不是回文数'); }