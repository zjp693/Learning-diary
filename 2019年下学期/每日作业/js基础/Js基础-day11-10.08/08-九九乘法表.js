// 需求: 利用JavaScript完成如下九九乘法表


// 分析: 
// 外层控制行数  内层控制列数
// 九九乘法表一共9个数  1开始 一直到9

for (var i = 1; i <= 9; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
        // 1x1=1  9x9=81(i*j)
        str += j + 'x' + i + '=' + j * i + '\t';
    }
    console.log(str);
}
