//5. 下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
// var a = 25;
// function f1() {
//     var a = b = c = 9;
//     console.log(a);    //?9
//     console.log(b);    // ?9
//     console.log(c);    // ?9
// }
// f1();
// console.log(a);    //?25
// console.log(b);     // ?9
// console.log(c);     // ?9
//----------------------------------
// var a = 25;
// function f1() {
//     var a = 9;
//     B = 9
//     c = 9
//     console.log(a);    //?9
//     console.log(b);    // ?9
//     console.log(c);    // ?9
// }
// f1();
// console.log(a);    //?25
// console.log(b);     // ?9
// console.log(c);     // ?9
var objPer = {
         name: "迪丽热巴",
         age: 27,
         sex: "女",
         school: "上海戏剧学院",
         company: "嘉行传媒"
    }
    for(var key in objPer){
         console.log(key);   // key 变量 输出  得到的是 属性名
             console.log(objPer[key]);  // objPer[key] 得到是 属性值
    
    }
    