//2.下列代码控制台打印出的值是多少？写出执行过程
function fn(){
    console.log("我们是全局的fn");

}
function fn2(){
    console.log(fn);
     // ？
    fn = 3;
    return ;
    function fn(){
        console.log("我是fn2里面的");
     
    }
}
fn2();  
//<------------------------------------
function fn2() {
    console.log(fn); // ？[Function: fn]  输出fn function fn() {console.log("我们是全局的fn");}
    fn = 3; //fn被重新赋值等于三
    return; //直接结束，不在执行
    function fn() {
      console.log("我是fn2里面的");
    }
  }
  fn2();
  function fn() {
    console.log("我们是全局的fn");
  }