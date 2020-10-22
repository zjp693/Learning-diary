//利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）
for (var i = 1; i <= 4; i++) {
    str = ''
    for (var j = 1; j <= 4 - i; j++) {
        str += '-'
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        str += '*'
    }
    console.log(str)
}

for (var i = 1; i <= 3; i++) {
    str = ''
    for (var j = 1; j <= i; j++) {
        str += '-'
    }
    for (var k = 1; k <= 7 - 2 * i; k++) {
        str += '*'
    }
    console.log(str)

    }
    for (var k = 1; k <7 - 2 * i; k++) {
        str += '*'
    }
    console.log(str)
