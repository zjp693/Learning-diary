//11.下列代码控制台打印出的值是多少？
var a = [];
for (let i = 0; i < 10; i++) {
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
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6
a[7](); // 7
a[8](); // 8
a[9](); // 9
© 2019 GitHub, Inc.