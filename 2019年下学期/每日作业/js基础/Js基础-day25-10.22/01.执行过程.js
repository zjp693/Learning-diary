//下列代码控制台打印出的值是多少?写出执行过程
//x=1,y=2,a=3  形参赋值进入后面的为数组
function b(x, y, a) {
     //a重新赋值为a=10
  a = 10
  console.log(arguments[2]);//输出数组中下标为2的值为a=10
}
b(1, 2, 3); 
//<-------------------------------->
