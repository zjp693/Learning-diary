// 一、编程题
// 21.用户输入“你是男人吗？”，回答如果是true， 那么输出“原来你是男人呀，呵呵”，  如果回答是：false，那么输出“你的性别难道是女?”。
//var a ="你是男人吗"
// if(a =="你是男人吗"){console.log('原来你是男人')}
// 22.输入两个整数，放入到a与b变量中去， 如果a>=b就将a与b中的值进行交换，否则就不交换
// var a=4
// var b=6
// if(a>=b){
// c=a
// a=b
// b=c
// console.log(a,b)
// }
// else{
//     console.log(a,b)
// }
// 23.输入一个三位整数，判其是不是降序数如:531是降序数 百位>十位>个位
// var a=654
// var b=a%10
// var c=parseInt(a/10%10)
// var d=parseInt(a/100%10)
// if(d>c  &&  c>b){
//     console.log(a+'是降序数')
// }else{
//     console.log(a+'不是降序数')
// }

// 24.用户输入”你爱我吗？”,如果回答的是”yes”,则输出”你是爱我的”,如果回答的是”no”,则输出”原来你不爱我”,如果回答的是其它，则输出”你到底是爱还是不爱，自己也不清楚”
// 25.利用JavaScript编写程序：张三为他的手机设定了自动拨号
// 按 1：拨爸爸的号
// 按 2：拨妈妈的号
// 按 3：拨爷爷的号
// 按 4：拨奶奶的号
// var a=1
// if(a==1){
//     console.log('爸爸的手机号')
// }
// else if(a==2){
//     console.log('妈妈的号')
// }
// else if(a==3){
//     console.log('爷爷的号')
// }
// else if(a==4){
//     console.log('奶奶的号')
// }
// 26.利用JavaScript编写程序实现如下功能；普通顾客购物满 100 元打 9 折；会员购物打 8 折；会员购物满 200 打 7.5 折。
// var a='vip'
// var b=100
// if (a=='vip'&& b>=200){
// console.log('7.5折')
// }
// else if(a=='vip'&& b>=100){
//     console.log('8折')
//     }
// else if(a=='ordinary customers'&& b>=100){
//     console.log( '9折')
// }
//27.运算符，如果是+号，则求出2个数的和；如果是-号，则求出2个数的差；如果是*号，则求出2个数的积;如果是/号，则求出2个数的商；如果是%,求出2给数的余数；否则打印输入有误。
// var a=3
// var b=3
// var c='/'
// if (c=='+'){
//     console.log(a+b)
// }
// else if (c=='*'){
//     console.log(a*b)
// }
// else if (c=='/'){
//     console.log(a/b)
// }
// else if (c=='-'){
//     console.log(a-b)
// }
// else if (c=='%'){
//     console.log(a%b)
// }
// else{
//     console.log('有误')
// }
// 28.利用JavaScript编写程序，定义一个变量num并且赋值,
// 1)如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2)如果 num 能被 3 整除，返回字符串 fizz
// 3)如果 num 能被 5 整除，返回字符串 buzz
// 4)如果num不是 Number 类型，返回 false
// 5)其余情况，返回参数 num
// var num='广东靓仔'
// if(typeof num==Number){
// if (num%3==0&&num%5==0){
//     console.log('fizzbuzz')
// }
// else if (num%3==0){
//     console.log('fizz')
// }
// else if (num%5==0){
//     console.log('buzz')
// }
// else{
//     console.log('false')
// }}
// else{
//     console.log(num)
// }
// 29.有个人想知道，一年之内一对兔子能繁殖多少对？
// 于是就筑了一道围墙把一对兔子关在里面。已知一对兔子每个月可以生一对小兔子，而一对兔子从出生后第3个月起每月生一对小兔子。
// 假如一年内没有发生死亡现象，那么，一对兔子一年内（12个月）能繁殖成多少对？ （不要看这些文字）这是著名的斐波那契数列
// //兔子的规律为数列，1，1，2，3，5，8，13，21    斐波那契系数 前两个数的和等于后一个  (拔高题)
// var a1=1;

// var a2=1;

// var a3=0;

// var a4=0;

// for(var i=2;i<=12;i++){

// a3=a1+a2;
// a1=a2;

// a2=a3;

// a4=a3
// }

// console.log(a4);
// 1.什么情况下控制台会输出undefined
//变量没赋初始值
// 2.字符串可以解析变量嘛？怎么解析
//console.log(`$[需要解析的变量]`)
// 3.Js中的‘+’有几层含义，分别是什么
//第一种为拼接，第二种为相加
// 4.console.log(1+’false’)和console.log(1+false)的值，并解释为什么
//1false    第一种为拼接，第二种为相加
