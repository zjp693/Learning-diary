//16.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"]
function fn(arr0) {
    for (var i = 0; i < arr0.length/2; i++) {
      var num = arr0[i]
      arr0[i] = arr0[arr0.length - 1 - i]
      arr0[arr0.length - 1 - i] = num
    }
    return arr0
  }
  var arr0 =["h", "e", "l", "l", "o"]
  console.log(fn(arr0));
  