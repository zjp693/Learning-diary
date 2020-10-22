//2.下列代码控制台打印出的值分别是多少？
var a = {
    user: '二狗子',
    f1: function () {
      console.log(this.user);
       // 二狗子
    }
  }
a.f1();