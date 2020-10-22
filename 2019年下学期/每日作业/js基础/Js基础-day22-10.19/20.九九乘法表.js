
//20.写一个函数，打印九九乘法表
function jiu() {
    for (var i = 1; i <= 9; i++) {
      var tu = ''
      for (var j = 1; j <= i; j++) {
        tu += `${j}x${i}=${j*i} `
      }
      console.log(tu);
    }
  }
  jiu()
  