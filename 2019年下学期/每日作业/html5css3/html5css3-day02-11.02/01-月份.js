/*1.录入月份，输出对应的季节
    (1)键盘录入一个整数(代表月份,范围1-12)
    (2)输出该月份对应的季节
   	   3,4,5春季
   	   6,7,8夏季
   	   9,10,11秋季
          12,1,2冬季*/
//声明月份变量
let sum = 3
//判断这个月份为什么季节
if (sum == 3 || sum == 4 || sum == 5) {
    console.log(sum, '月份是春季')
} else if (sum == 6 || sum == 7 || sum == 8) {
    console.log(sum, '月份是夏季')
} else if (sum == 9 || sum == 10 || sum == 11) {
    console.log(sum, '月份是秋季')
} else if (sum == 12 || sum == 1 || sum == 2) {
    console.log(sum, '月份是冬季')
}