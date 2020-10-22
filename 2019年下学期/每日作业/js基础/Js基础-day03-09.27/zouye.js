//一、编程题
//1. 定义一个数组，保存六种数据类型的名称？
var arr = ['number','boolean','string','underined','null','Object']
console.log(arr)
//2. 定义一个对象，保存你自己的名字、年龄、爱好？
var pepole = {
    name:'张建平',
    age:18,
    hobby:'sleep'
}
   
console.log(pepole)
//3. 有一个数组：var arr = [12,43,54,43]，写代码计算数组中第1个元素和第3个元素的和？
var arr = [12,43,54,43]
console.log(arr[0]+arr[2])
//4. 定义一个二维数组（随便放些数据进去）？
var arr=[1,2,3['age','s','d']]
//5. 有两个变量 a 和 b ，请写代码交换这两个变量的值？
var name =[num1=1,num2=2]
[1,2] = [2,1]
console.log(name)
//6. 有一个对象： var obj = {name:'tom',age:10,books:['水浒','西游']} ，写代码打印出 name 属性和 books 中第2个元素？
var obj = {name:'tom',age:10,books:['水浒','西游']}
console.log(obj.name,obj.books[1])
//7. 定义两个变量保存两个数字，然后再定义一个变量保存前两个变量的和？
var name1=1
var name2=2
name3=name1+name2
console.log(name3)
//8. 定义一个包含多行和另一个变量值的字符串？
var mane=555
var si =`111111111\
\n22222233333\
\n${mane}
\n3333000000`
var str=`${si}`
console.log(str)
//9. 定义一个数组，数组中保存两个对象，然后打印数组中第二个对象的随便一个属性？
var name1=1
var name2=2
name3=name1+name2
console.log(name3)
//10. 有一个数组：var arr = [13,54,65,23,54]，写代码计算数组中第2个元素和第4个元素的和，并把和保存到第3个元素上 
var arr = [13,54,65,23,54]
arr[2]=arr[1]+arr[3]
console.log(arr)
//11.说出下面代码的运行结果,并且解释原因:
var name = '张三';
var age ;
const gender ="女"; 
name = "李四";
console.log(name);
console.log(age);
gender = "男";
console.log(gender);报错少了一个定义变量var
//12.下列变量名哪个不正确
//var sname ;  var 1age ; var Name;
第二个应该是 var age
//  二、解答题
//1、数据类型有几种？
7   'number','boolean','string','underined','null','Object'
//2、什么是对象？如何创建对象？
对象：由多个键值对组合到一起形成的一种类型。
每个对象都是由 多个 `键值对` 组成
方法一、使用{ ... }
方法二、使用 new Object({ ... })
//3、如何读取和修改和删除对象中的值？//
console.log( people1.name )
people1.name = '广东靓仔'
delete people1.name
//4、什么时候会出现 undefined？
1、变量没赋初始值
2、函数没有返回值
//5、什么是数组？如何创建数组？
数组：把同一类的数据放到一起组成一组。
1.var arr = [数1,数2,数3,数4,....]
2.var arr = new Array(数1,数2,数3,数4,....)
//6、如何获取和修改数组中的某一个值？
console.log( books[1]  )
books[3] = '广东靓仔'
//7、js变量命名有什么规范？
不能以数字开头，名字只能包含数字，字母，下划线。不能是一些已被占用的关键字
//8、如何定义多行字符串？有几种方法？
字符串：用引号引起来的字母、数字、字符的组合
1， `（反引号）
2   '\\\'
//9、Boolean 类型有几个值？分别代表什么？
Boolean类型有两个值，true(真) , false（假）
//10、字符串中能解析变量吗？怎么解析？
var si = `
内容
console.log(si)
var str = `${si}`
console.log(str)
