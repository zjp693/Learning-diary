// 需求: 利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。

// 步骤:
// 1循环找出100-999之间的所有的数字
for (var i = 100; i < 1000; i++) {
    // 2.找出每一个三位数的每一位的数字
    var gw = i % 10;
    var sw = parseInt(i / 10 % 10);
    var bw = parseInt(i / 100);
    // 3.判断是否满足 每一位数字的立方和等于该数字本身
    if (gw * gw * gw + sw * sw * sw + bw * bw * bw === i) {
        // 4.如果满足 打印输出
        console.log(i);
    }

}


