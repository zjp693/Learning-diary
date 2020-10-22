console.log(Number(true))  // 1
console.log(Number(false)) // 0
console.log(Number(" ")) //0
console.log(Number(['1','2'])) //NaN
console.log(Number([1]))// 1
console.log(Number({}))   //NaN
console.log(Number({a:1})) // NaN
console.log(Number("3.14")) //3.14
console.log(Number(null)) // 0
console.log(Number(undefined)) //NaN
console.log(Number("12456aaaa")) //NaN
console.log(String({})) // object Object
console.log(String([])) // Null
console.log(String(123)) //123
console.log(String(false)) //false
console.log(String(null)) //null
console.log(String(undefined)) //undefined
//console.log(undefined.toString()) //报错
//console.log(null.toString())  //报错
console.log(Boolean(0)) // false
console.log(Boolean("")) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean({})) // true
console.log(Boolean([]))  // true