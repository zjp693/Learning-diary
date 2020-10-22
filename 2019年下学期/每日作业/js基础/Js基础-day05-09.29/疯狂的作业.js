// 
// var a ,b ,c;
// for(var i = 100;i<1000;i++){
//     a = parseInt(i/100);
//     b = parseInt(i%100/10);
//     c = parseInt(i%10);
//     if(Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)==i){
//         console.log(i+",");
//     }
// }

//  2.求任意三个数字的最大值和最小值
// var ary =[7,5,9];
// var min =eval('Math.min('+ary.toString()+')')
// var max=eval('Math.max('+ary.toString()+')');
// console.log('min:'+min,'max:'+max)
// //3. 给一个数字赋值给一个变量num1，求出是奇数还是偶数
// var a=11
// if(a%2==0){
//     console.log('偶数')
// }else{
//     console.log('奇数')
// }
// //4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
 //var a=3.14
 //if(a%1==0){
   // console.log('整数')
//}else{
   //  console.log('小数')}
//5.提示用户输入年龄，若用户的年龄大于等于18岁，则弹出“恭喜您，您已经成年”，否则以弹出框的方式提示用户年龄太小
//var age=3
 //if(age>=18){
 //console.log('恭喜您，您已经成年')
//}else{
 //       console.log('用户年龄太小')
 //   }
 //6.利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值
//  var a = 85
// if(a > 90)
// {
//     b = 4
// }
// else if(a > 80)
// {
//     b = 3
// }
// else if(a > 70)
// {
//     b = 2
// }
// else if(a > 60)
// {
//     b = 1
// } 
// console.log(b)  
//7. 通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），
// var age = 25,c
// if(age>=60)
// {
//     c = '老年'
// }
// else if(40 <= age> 60)
// {
//     c = '中年'
// }
// else if(24 < age < 40)
// {
//     c = '青年'
// }
// else if(14 <= age < 24)
// {
//     c = '青少年'
// }
// else if(age < 14)
// {
//     c = '儿童'
// } 
// console.log(c)    
//8. 接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐
// var a=1800,b
// if(a>=2000){
//      b='西餐'
// }else if(2000<a<=1500){
//      b='快餐'
// }
// console.log(b)
//若小于1500，大于等于1000，请大家喝饮料。若小于100，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够
// var a=1,b
// if(1500>a>=1000){
//       b='饮料'
// }else if(500<=a>100)
// {
//       b='棒棒糖'
// }
// else
// {
//     b='下次把钱带够'
// }
//  console.log(b)
//分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
// var a = 60,g
// if(a >= 90)
// {
//      g = 'A'
// }
// else if(a >= 80 && a < 90)
// {
//     g = 'B'
// }
// else if(a >= 70 && a < 80)
// {
//    g = 'C'
// }
// else if(a >= 60 && a <= 70)
// {
//     g ='D'
// } else if(a < 60)
// {
//     g ='e'
// } 
// console.log(g)
//获取当前时间，判断今年是否为闰年。两种方法判断 
//1）判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除
// var a =445
// if (a%400==0 ||( a%4==0  &&   a%100  !=0)){
//    a='闰年'
// }
// else
// {
//    a='不是闰年'
// }
// console.log(a)
//11.本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？
// var moner= 10000;
// var rate =0.003;
// for (var i = 1;i <=5;i++){
//    moner = moner + moner*rate;
// }
//  console.log('本金：'+moner.toFixed(2))
// 12. 根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
// var day =6
// if ( 5<=day && day<=1){
//    a='工作日'
// }else
// {
// a='休息日'
// }
// console.log(a)
//13. 录入姓名和性别根据输入的姓名，性别，打印欢迎XX先生/女士。（性别用0和1区别。0表示女士，1表示男士）
// console.log('欢迎');
// console.log('靓仔')
// if(gender = 0)
// {
//     console.log('女士')
// }
// else
// {
//     console.log('先生')
// }

// 14. 输出该数字打头的一个成语，视为你今天的状态
//     1：一帆风顺
//     2：二话不说
//     3：三心二意
//     4：四面楚歌
//     5：五湖四海
//     6：六亲不认
//     7：七上八下
// var tody = 1
// if(tody = 1)
// {
//     console.log('一帆风顺')
// }
// else if(tody = 2)
// {
//     console.log('二话不说')
// }
// else if(tody = 3)
// {
//     console.log('三心二意')
// }
// else if(tody = 4)
// {
//     console.log('四面楚歌')
// }
// else if(tody = 5)
// {
//     console.log('五湖四海')
// }
// else if(tody = 6)
// {
//     console.log('六亲不认')
// }
// else if(tody = 7)
// {
//     console.log('七上八下')
//}

// 15. 键盘录入学生考试成绩，使用if语句判断成绩等级，并打印出来。
// 16. 录入一个整数,判断它能否被3,5,7整除,并输出以下信息
//     (1)能同时被3,5,7整除
//     (2)能被其中两个数整除(要指出那两个数)
//     (3)只能被其中一个数整除(指出那一个)
//     (4)不能被3,5,7任一个整除
//var num=22;
// if (num%3==0 && num%5==0 && num%7==0){
//     console.log("能同时被3,5,7整除");
// }
// else if (num%3==0 && num%5==0){
//     console.log("能同时被3,5整除")
// }
// else if (num%3==0 && num%7==0){
//     console.log("能同时被3,7整除")
// }
// else if (num%5==0 && num%7==0){
//     console.log("能同时被3,7整除")
// }
// else if (num%3!=0 && num%5!=0 && num%7!=0){
//     console.log("不能被3,5,7任一个整除")
// }

// 17. 录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和.
// var a=50
// var b=20
// var c=a+b
// if(c>100){
// console.log(c) 
//  }
// else if(c<100){
//    console.log(c)
// }
// 18. 输入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型
//     等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）
// var  a=10;
// var b=15;
// var c=15;
// if (a+b>c&&a-b<c) 
// {
//     if (a==b && b==c) 
//     {
//         console.log('等边三角形');
//     }
//     else if (a==b || a==c || b==c) 
//     {
//         console.log('等腰三角形');
//     }
//     else if (a*a+b*b == c*c) 
//     {
//         console.log('直角三角形');
//     }
//     else
//     {
//         console.log('其他三角形');
//     }
// }
// else
// {
//     console.log("不能组成三角形");
// }