// 1. 打印1 - 100中前三个是17的整数倍的数。

//声明变量
let a = 0;
//循环
for (let i = 1; i <= 100; i++) {
    // 定义累加量
    let conut = 0;
    if (i % 17 == 0) {
        conut += 1;
    }
    if (conut == 1) {
        console.log(i)
        a++
    }
    if (a == 3) {
        break;
    }
}