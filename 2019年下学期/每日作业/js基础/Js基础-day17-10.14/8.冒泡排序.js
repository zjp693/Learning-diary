//将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序
var arr= [1,3,2,8,6,11,9]
arr.sort((a, b) => {
    return a - b
})
console.log(arr);
