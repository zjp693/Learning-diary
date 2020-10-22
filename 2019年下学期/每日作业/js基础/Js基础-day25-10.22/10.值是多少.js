//10.下列代码控制台打印出的值是多少？
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // ?
a[7](); // ?
a[8](); // ?
a[9](); // ?

// // 执行时的代码
var a;
a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
}
a[6](); //10
a[7](); //10
a[8](); //10
a[9](); //10