// 一、编程题
// 41.入职薪水10K，每年涨幅5%，输出50年后工资多少
// var a=10000;
// for(var i=1;i<=50;i++){
//        a =a+a*0.05

//     }
//  console.log(a)

// 42.求出1-1/2+1/3-1/4…..-1/100的和（拔高题）
// var c=0
// var d=0
// for (var a =1;a<=100;a+=2){c+=1/a}
// for (var b =2;b<=100;b+=2){d+=1/b}
// console.log(c-d)

// 43.用for循环求2+22+222+2222+22222的和
// var a =0
// var c =0
// for (var b=1;b<=5;b++){a=(a*10)+2;c+=a}
// console.log(c)

// 44.定义一个人的对象，有name,age,gender,height等属性，
// 要求：1)获取name的值
// 2)通过2种方式给对象添加一个新的属性weight,值自己写
// 3)删除属性名height
// var a={
//     name:'靓仔',
//     age:10,
//     gender:'70kg',
//     height:175,
// }
// console.log(a.name)
// //a.weight='没意思'
// var weight='weight'
// a[weight]=123
// console.log(a)
// delete a.height
// console.log(a)

// 45.定义一个数组，取出下标是3的值，计算下表是2和下表是4对应的元素的和，并且赋值给一个变量，在控制台输出
// var a=[1,2,3,4,5]
// console.log(a[4])
// var b=a[2]+a[4]
//  console.log(b)

// 46.定义一个二维数组，var arr = [1,2,’3’,true,[22,33,55,66]],将55输出在控制台上
//var arr =[1,2,"3",true,[22,33,55,66]]
// console.log(arr[4][2])

// 47.猴子偷桃  第一天吃一半+1个，第二天吃剩下的一半+1个，以后都吃剩下的一半+1个 到第10天只剩一个了 问第一天摘了多少桃子？
// var a=1
// for(var i=1;i<10;i++){
//     a=2*(a+1)
// }console.log(a)

// 49.控制台输出：求1 x 2 x 3 x 4 x ... x 19 x 20的结果
//var a=1
//for(var b=1;b<=20;b++){a*=b}console.log(a)

// 50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？
// var a =0
// for (var b =100;b<=500;b++){
//     if(parseInt(b/100)!=4){a++}
//     else if(parseFloat(parseInt(b/10)/10)!=4){a++}
//     else if(parseFloat(b/10)!=4){a++}
// }console.log(a)

// 二、简答题
// 1.怎么将别的数据类型转换成字符串类型
//console.log(String(变量名))

// 2.怎么定义一个对象，并且给获取对象的属性，给对象添加和删除属性
// 获取 ：变量名.加上属性名
// 添加 ：变量名.添加的属性名=值
// 删除 ：delete 变量名.属性名

// 3.== 和 === 的区别是什么？
// console.log(1 == “1”)和console.log(1 === fasle)的结果是什么，并解释为什么
// ==值相等就相等，===值与类型都要相等
//         true      false
// 第一个值相等了，第二个值不等，并且类型不等

// 4.前++ 后++的区别是什么
// 前++为先相加再运算，后++为先运算后相加
