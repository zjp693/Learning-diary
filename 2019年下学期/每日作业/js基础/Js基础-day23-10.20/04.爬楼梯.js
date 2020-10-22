// 写一个函数，假设你正在爬楼梯。需要 n 阶你才能到达楼顶，每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢

// function num(n) {
//     if (n <= 2) {
//         console.log(n);
//     }
//     var num1 = 1
//     var num2 = 2
//     for (var i = 2; i < n; i++) {
//         var sum = num1 + num2
//         num1 = num2
//         num2 = sum
//     }console.log(sum);
// }

// num(5)