// 2.求1-100之间所有偶数的和，以及偶数的个数
var sum = 0
var summ = 0
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum += i
        summ++
    }
}
console.log(sum)
console.log(summ)