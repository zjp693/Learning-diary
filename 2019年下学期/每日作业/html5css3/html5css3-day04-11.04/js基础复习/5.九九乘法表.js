// 5.打印九九乘法表
for (var i = 1; i <= 9; i++) {
    var a = ''
    for (var j = 1; j <= i; j++) {
        a += i + 'x' + j + '=' + j * i + '\t'
    } console.log(a);
}
