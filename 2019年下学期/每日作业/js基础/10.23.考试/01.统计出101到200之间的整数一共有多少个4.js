//例如101中没有4；104中有一个4；144中有两个4。你要做的是统计出101到200之间的整数一共有多少个4。
var j = 0
for (var i = 101; i < 200; i++) {
    a = parseInt(i % 10)
    b = parseInt(i / 10 % 10)
    if (a == 4) {
        j++
    }
    if (b == 4) {
        j++
    }
}
console.log(j);