/*4. 请编写程序，要求输入身高，体重后，输出体质指数
    测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
    成人的BMI数值：
    过轻：低于18.5
    正常：[18.5,23.9]
    过重：[24,27]
    肥胖：[28,32]
    非常肥胖, 高于32 */
let m = 1.81
let kg = 90
let BMI = kg / (m * m)
if (BMI < 18.5) {
    console.log('过轻')
} else if (BMI <= 23.9 || BMI >= 18.5) {
    console.log('正常')
} else if (BMI <= 27 || BMI >= 24) {
    console.log('过重')
} else if (BMI <= 32 || BMI >= 28) {
    console.log('肥胖')
} else if (BMI < 32) {
    console.log('非常肥胖')
}