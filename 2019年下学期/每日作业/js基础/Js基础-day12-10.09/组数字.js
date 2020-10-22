//有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？有多少个，有哪些三位数？
var d = 0
for (var a = 1; a < 5; a++) {
    for (var b = 1; b < 5; b++) {
        for (var c = 1; c < 5; c++) {
            if (a != b && b != c && c != a) {
                console.log(a, b, c), d++
            }
        }
    }
} console.log(d)