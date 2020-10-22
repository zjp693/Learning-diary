// 需求: 使用for循环语句计算3+6+9+12+……+99的结果

var sum = 0;
for (var i = 3; i < 100; i += 3) {
    sum += i;
}
console.log(sum);