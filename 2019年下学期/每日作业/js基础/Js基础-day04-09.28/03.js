var num1 = 123;
var num2 ="123"
console.log(num1+num2)  // 123连接123=123123
console.log(num1 + +num2)  // 123+123=246
console.log(num1 + !! num2)  // 123+1=124
console.log(num1+Number(num2))  // 123+123=246