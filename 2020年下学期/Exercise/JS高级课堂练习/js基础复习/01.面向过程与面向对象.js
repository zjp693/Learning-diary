//以下代码是对对象的复习
//字面量创建对象
var ldh = {
    name: '刘德华',
    age: 18
}
console.log(ldh);
1
//构造函数创建对象
function Star(name, age) {
    this.name = name;
    this.age = age;
}
var ldh = new Star('刘德华', 18)//实例化对象
console.log(ldh);	