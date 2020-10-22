var a = {
    user: '二狗子',
    b: {
      user: '大傻子',
      f1: function () {
        console.log(this.user);
      }
    }
  }
  a.b.f1();