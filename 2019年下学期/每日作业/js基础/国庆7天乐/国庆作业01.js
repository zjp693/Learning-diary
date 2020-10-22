// 一、编程题
// 1.定义若干个js变量，需表现出js中的各种数据类型，并在页面中输出每个变量的值和其对应类型。
// var a=1
// var b=true
// var c=' '
// var d=null
// var e=undefined
// var g={}
// console.log(a,b,c,d,e,f,g)
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof g)
// 2.用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：比如，用户输入19，那么控制台显示
// 1
// 19
// 比如，用户输入21，那么控制台显示
// 1
// 3
// 7
// 21
// var num=89;//这个数字你自己获得
// var a=new Array();
// for(var i=1;i<=num;i++)
// {
// if(num%i==0)
// {
// a.push(i);
// }
// }
// console.log(a);
// 3.读程序，写结果：
// （1）
// var v1 ='abc'
// var v2 =v1
// var v2 ='123'+v2
// alert(v2);123v2
// alert(v1);abc
//(2)
// var a={name:'张三',age:22};
// var b=a;
// alelt(b.age);undefined
// b.age=12;
// alert(a.age);12
// 4.已知任意两个正整数（a，b），将其作为直角三角形的直角边长，求斜边长
// var a=3;
// var b=4;
// var c=(a*a+b*b)
// c=Math.sqrt(c)
// console.log(c)
// // 5.一个小球从空中掉下来，求如下问题：
// // 如果已知小球掉落时高度（1000m），求其触地瞬间的速度；
// var h=1000
// var g=9.8
// var v=Math.sqrt(2*g*h)
// console.log(v)
// // 如果已知小球落地瞬间的速度（1000m/s），求其掉落时的高度）
// var v=1000
// var g=9.8
// var h=(v*v)/(g*2)
// console.log(h)
// // 附自由落体公式：自由落体运动的规律：2gh=v^2。；（其中g是重力加速度，在地球上g≈9.8m/s2；v是速度，h高度)
// // 6.写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，既是3的倍数又是5的倍数打印“abcde”。
// for(var a=1;a<=100;a++){
//     if(a%3==0){console.log('Fizz')}
//     else if(a%5==0){console.log('Buzz')}
//     else if(a%5==0 && a%3==0){console.log('abcde')}
//     }

// 7.求两个正数的最大公约数
// var num1 = 1024
// var num2 = 2048
// var max
// if(num1>num2){
//   for(var i = 1;i<=num2;i++){
//     if(num1%i ==0 && num2%i == 0){
//        max = i
//     }
//   }
//   console.log(max);
  
// }
// if(num1<num2){
//   for(var i = 1;i<=num1;i++){
//     if(num1%i ==0 && num2%i == 0){
//        max = i
//     }
//   }
//   console.log(max);
  
// }
// 8.求两个正数的最小公倍数var a = 20
// var b = 100
// if(a>b){
//    for(var i = a;i<=a*b;i++){
//      if(i%a == 0 && i%b == 0 ){
//        console.log(i); 
//        i = a*b       
//      }
//    }
// }
// if(a<b){
//   for(var i = b;i<=a*b;i++){
//     if(i%a == 0 && i%b == 0 ){
//       i = a*b       
//     }
//   }
//console.log(i);
// }

// 9.水果店LED屏幕

// 模拟LED屏幕显示内容

//                       图二
// 要求 1）商品编号 商品名称  单价 和品质 都定义成变量
//      2）在控制台出各种水果的信息，如图二所示
// var l={m:'榴莲',d:32,j:'公斤',pz:'A'}
// var p={m1:'苹果',d1:6,j1:'公斤',pz1:'A'}
// var n={m2:'猕猴桃',d2:6.5,j2:'公斤',pz2:'A'}
// console.log('水果名称'+' '+'水果单价'+' '+'计价单位'+' '+'品质')
// console.log(l.m+`     `+l.d+`      `+l.j+`      `+l.pz)
// console.log(p.m1+`     `+p.d1+`      `+p.j1+`      `+p.pz1)
// console.log(n.m2+`   `+n.d2+`      `+n.j2+`      `+n.pz2)
// 10、超市购物小票V2  
// 展示超市所有的商品信息到控制台，如图三所示:
// var num1 = 15.50 * 22.00;
// var num2 = 16.00 * 55.00;
// var num3 = 14.50 * 24.00;

// console.log(`少林寺` +num1);
// console.log(`` +num2)
// console.log(`` +num3)
// console.log(`总计` +(num1+num2+num3))
//           图三
// 二、简答题
// 1.数据类型有几种,分别是哪些
//Number,Boolean,String,undefined,null,Object,
// 2.怎么判断一个变量的数据类型
//typeof(变量名+属性名)
// 3.怎么判断一个变量是否是数字
//(typeof(num)==="number")&&(num!==Infinity)&&!isNaN(num)
// 4.怎么将其他数据类型转换成数字类型
//Number
