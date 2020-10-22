// 需求:控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和

// 步骤:
// 1.定义一个累加变量sum
var sum = 0;
// 2.定义一个阶乘基数 1
var jie = 1;
// 3.使用循环 求 1-20的阶乘
for (var i = 1; i <= 20; i++) {
    // 4.求阶乘
    jie = jie * i;
    // 5.累加
    sum += 1 / jie;
}

// 6.打印
console.log(sum);