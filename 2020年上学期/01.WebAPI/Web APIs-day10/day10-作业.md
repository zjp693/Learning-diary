- # 选择题

  1. 下列选项关于window对象说法不正确的是(B C )

     A、window对象本身带有一个name属性，值是空字符串

     B、window.reload()方法可以用来刷新当前页面

     C、left和top都是window对象本身就带有的属性

     D、定义了全局变量g;可以用window.g的方式来存取该变量

  2. 以下关于history对象的属性或方法描述正确的是 ( ABCD )

     A、length保存历史URL地址列表的长度信息 // 返回在历史列表中的网址数量

     B、forward转到浏览器载入历史URL地址列表的当前URL的下一个URL

     C、back回到浏览器载入历史URL地址列表的当前URL的前一个URL

     D、go加载history列表中的某个具体页面,go(参数)参数可填负数，正数 ,负数往后跳转，正数往前跳转

  3. 下列选项关于location对象属性说法错误的是( B )

     A、location.href可以设置或返回完成的URL

     B、location.search可以设置或返回从#开始的URL(查询部分)

     C、location.pathname可以设置或返回URL的路径部分

     D、location.hash可以设置或返回从井号(#)开始的URL(锚)

  4. 下列选项中关于浏览器对象的说法正确的是( ABD )

     A、history对象记录了用户在一个浏览器中已经访问过的URL

     B、location对象相当于IE浏览器中的地址栏，包含关于当前URL地址的信息

     C、location对象是history对象的父对象

     D、location对象是window对象的子对象 // 属性

  5. 下面关于BOM对象的描述不正确的是( C )

     A、history对象是用来获取浏览器访问历史的一些相关信息

     B、location对象是用来获取浏览器当前URL的一些相关信息

     C、navigator对象记是用来获取客户端屏幕的一些相关信息

     D、window对象是js的最顶级对象，其他的BOM对象都是window对象的属性

  # 简答题

  第1题. 请列举5个location对象常用的属性，分别写出每个属性的作用？

  ```js
location.href  // 返回或者设置整个URL
  location.host  // 返回域名
location.port  // 返回端口号
  location.pathname  // 返回路径
location.search  // 返回参数
  ```

  第2题. 请列举3个history对象常用的方法，分别写出每个方法的作用？

  ```js
history.back() // 网页后退功能
  history.forward() // 网页前进功能 
history.go() // 网页前进后退功能，参数为正数往前进，为负数往后退
  ```

  第3题. 请简述一下js的执行机制，同步和异步的区别是什么？(很重要)

  ```js
js的执行机制：
  同步: 在主线程上执行任务，任务按顺序排列好一步一步执行
异步: 任务不进入主线程排队执行，而是进入任务队列，当主线程执行完后，任务队列的任务通知主线程开始执行
  区别: 同步完再异步吧。
  ```
```
  
第4题. 请简述this指向有哪些场景?(很重要)
  
​```js
  this 指向：
1.全局作用域或者普通函数中的this指向全局对象window
  2.对象中this指向该对象
3.构造函数中this指向构造函数
```

  # this指向

  1.下列代码控制台打印出的值分别是多少？

  ```js
function f1(){
      var user = '二狗子';
    alert(this.user);  // ？【undefined】 window.user
      alert(this);   // ？【Window】
  }
  
 f1();
  ```

  2.下列代码控制台打印出的值分别是多少？

  ```js
var a = {
      user: '二狗子',
    f1: function () {
        alert(this.user); // ？【'二狗子'】 a.user
    }
    }
a.f1();
  ```

  3.下列代码控制台打印出的值分别是多少？

  ```js
var a = {
      user: '二狗子',
    b: {
        user: '大傻子',
      f1: function () {
          alert(this.user);  // ?【'大傻子'】 b.user
      }
      }
  }
  a.b.f1();
  ```

4.下列代码控制台打印出的值分别是多少？

```js
  var a = {
    user: '二狗子',
      b: {
      f1: function () {
          alert(this.user);  // ?【undefined】 b.user
      }
      }
  }
  a.b.f1(); 
```

5.下列代码控制台打印出的值分别是多少？

  ```js
  function f1(){
      this.user = "二狗子";
    }
    var a = new f1();
    alert(a.user);  // ?【'二狗子'】 f1.user
  ```

  1. 下列代码控制台打印出的值分别是多少？

  ```js
  var a=1;
  function printA(){
    console.log(this.a);
  }
  var obj={
    a:2,
    foo:printA,
    bar:function(){
      printA();
    }
  }
  obj.foo(); //  ?【2】 obj.a
  obj.bar(); // ?【1】 window.a
  ```

  1. 下列代码控制台打印出的值分别是多少？

  ```js
  var  color = "green";
  var test = {
   color:'blue',
   getColor:function(){
      var color = "red";
       console.log(this.color);
    }
  }
  var getColor = test.getColor;
  getColor();  // ?【'green'】 window.color
  test.getColor(); // ?【'blue'】 test.color
  ```

  1. 下列代码控制台打印出的值分别是多少？

  ```js
  var point = { 
      x : 0, 
      y : 0, 
      moveTo : function(x, y) { 
          this.x = this.x + x; 
          this.y = this.y + y;
          console.log(this.x); // ?【1】 point.x
          console.log(this.y); // ?【1】 point.y
      } 
  }; 
  point.moveTo(1, 1)
  ```