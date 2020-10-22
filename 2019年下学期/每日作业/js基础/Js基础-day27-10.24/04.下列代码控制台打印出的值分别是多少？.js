var a = {
    user: '二狗子',
    b: {
      f1: function () {
       console.log(this.user);
       // ?undefined
      }
    }
  }
  a.b.f1(); 