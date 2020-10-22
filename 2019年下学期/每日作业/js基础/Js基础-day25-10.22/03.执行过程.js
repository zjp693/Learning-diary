//3.下列代码控制台打印出的值是多少？写出执行过程
function test(){  
      b();  
      var a=1;
     function b(){
          console.log(a);  // ？
          var a=2;
      }
}
test();  // ?
//<---------------------------------------------
function test() {
      function b() {
        var a;
        console.log(a); // ？undefined  只声明未定义若var a=2 在打印上边则输出为2
        a = 2;
      }
      var a = 1; //在test中是局部变量但在b中为全局变量
      b(); //调用函数b
    }
    test(); // ? 调用函数test