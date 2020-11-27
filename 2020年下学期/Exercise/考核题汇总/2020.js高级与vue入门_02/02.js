// 例: 新对象和旧对象的内存地址要不一样,一样的算不对
var obj = {
    id: 1,
    name: "andy",
    msg: {
        age: 18,
    },
    color: ["pink", "red"],
};


var o = {}

function cv(newobj, oldobj) {
    for (var k in oldobj) {
        var item = oldobj[k]
        if (Array.isArray(oldobj[k])) {
            newobj[k] = []
            cv(newobj[k], item)
        } else if (item instanceof Object) {
            newobj[k] = {}
            cv(newobj[k], item)
        } else {
            newobj[k] = item

        }
    }
}
cv(o, obj)

o.id = 3
obj.id=4
console.log(o);
console.log(obj);