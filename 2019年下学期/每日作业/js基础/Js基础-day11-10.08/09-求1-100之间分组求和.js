// 需求:把1 - 100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1 - 10的和为一组，输出来，11 - 20的和为一组输出来，依次类推


// 进行了10次
// 声明累加变量
for (var j = 1; j <= 10; j++) {
    // j: 1 2  3  4  5  6  7  8  9  10
    // i: 1 11 21 31 41 51 61 71 81  91  (j-1)*10+1
    //i1: 10 20 30 40 50 60 70 80 90 100 10*i
    var sum = 0;
    for (var i = (j - 1) * 10 + 1; i <= 10 * j; i++) {
        sum += i;
    }
    console.log(sum);
}
