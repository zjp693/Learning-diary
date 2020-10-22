// var 函数名 = function (形参, 形参, 形参...) {
//     var 对象名 = new Object();
//     对象名.键 = 形参;
//     对象名.键 = 形参;
//     对象名.键 = 形参;
//     ...
//     return 对象名
// }
// var 新的变量 = 函数名(实参, 实参, 实参...);


function zee(a,b,c){
    let Obj = new Object();
    Obj.a=a
    Obj.b=b
    Obj.c=c
    return Obj
}

let lis=zee(55,66,77)
console.log(lis);

// var oComputer3 = function (color, weight, brand, type, listen, play, coding) {
//     var obj = new Object();
//     obj.color = color;
//     obj.weight = weight;
//     obj.brand = brand;
//     obj.type = type;
//     obj.listen = listen;
//     obj.play = play;
//     obj.coding = coding;
// }


// var computer3 = oComputer3("black", "3kg", "联想", "ThinkPad", function () {
//     console.log("我能看电影");
// }, function () {
//     console.log("我能听音乐");
// }, function () {
//     console.log("我能打游戏");
// }, function () {
//     console.log("我能敲代码");
// });
// console.log(computer3);
// var ycy = CreateObj("杨超越", "女", 20, ["唱歌", "跳舞", "拍戏"], function () {
//            console.log("我用力去追~")
//     })
//     // 创建一个赵露思对象
//     var zls = CreateObj("赵露思", "女", 21, ["艺术体操", "唱歌", "演戏"], function () {
//            console.log("我会努力学习各路方言")
//     })
    
