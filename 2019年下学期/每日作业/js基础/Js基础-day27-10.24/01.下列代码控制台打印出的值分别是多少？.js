function f1(){
    var user = '二狗子';
   console.log(this.user);
    // ？undefined
   console.log(this);
    // ？window
  }
 f1();