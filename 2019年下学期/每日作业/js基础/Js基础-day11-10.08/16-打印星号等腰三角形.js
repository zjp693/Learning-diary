// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成)


// 重复代码执行了5次
for (var k = 0; k < 5; k++) {
    var str = "";
    // 4 3 2 1 0
    for (var i = 0; i < 4 - k; i++) {
        str += " ";
    }
    // 1 2 3 4 5
    for (var j = 0; j <= k; j++) {
        str += "* ";
    }
    console.log(str);
}