//在数组中 查询数据第二次55出现的位置,打印第二次出现的索引（索引指从0开始）[11, 32，55, 47，55, 79，23]
var a = [11, 32, 55, 47, 55, 79, 23]
for (var i = 0; i < a.length; i++) {
    if (a[i] == 55) {
        console.log(i);
    }

}