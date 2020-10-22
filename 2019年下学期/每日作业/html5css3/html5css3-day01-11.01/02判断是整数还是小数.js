//2. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
//声明变量
var sum = 3.14
//求整
var a = (parseInt(sum / 1))
//判断
if (a === sum) {
    console.log('是整数')
} else {
    console.log('是小数')
}