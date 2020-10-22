// class Father {
//     constructor(surname) {
//         this.surname = surname;
//     }
//     say() {
//         console.log('你的姓是' + this.surname);
//     }
// }

// class Son extends Father {  // 这样子类就继承了父类的属性和方法
// }
// var damao = new Son('刘');
// damao.say();      //结果为 你的姓是刘




class Father {
    constructor() {

    }
    money() {
        console.log(555);
    }
}
class Son extends Father {

}

var son = new Son()
son.money()