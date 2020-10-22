//  找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]
var arr = [11, 32, 66, 47, 79, 23, 89]
for (var i = 0; i < parseInt(arr.length / 2); i++) {
  var a = arr[i]
  arr[i] = arr[arr.length - 1 - i]
  arr[arr.length - 1 - i] = a
}
console.log(arr);   