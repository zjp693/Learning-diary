// 需求: 数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?

// var arr = [10,5,34,59,98];


// 1.找出最大值
// 分析: 假设数组中最大的值  习惯假设 arr[0]  然后循环遍历数组  让每个数都与最大的去比较 如果某个数比最大的数还要大 那么 新的最大
// 数产生了 那么就把最大的数重新更改成刚才那个数

// var arr = [10,5,34,59,98];
// 步骤:
// 1.假设一个最大值
// var max = arr[0];
// // 2.循环遍历数组
// for (var i = 0; i < arr.length; i++) {
// // 3.判断某个数是不是大于最大值
//  if (arr[i] > max){
// // 4.如果是  让最大值等于某个数
//     max = arr[i];
//  }
// }
// console.log(max);







// 2.找出最小值（while）
var arr = [10,5,34,59,98];

// 步骤:
// 1.假设arr[0]为最小值
var min = arr[0];
// 2.初始化表达式
var i = 0;
// 3.while循环 如果初始值大于数组的长度 就让while循环停止
while(i < arr.length){
// 3.1 判断如果某个值小于最小值 
    if (arr[i] < min){
// 3.1.1 最小值等于某个值
        min = arr[i];
    }
// 3.2 步进表达式
i++;
}
console.log(min);
var arr = [10,5,34,59,98];
var a=arr[0]
var b=0
while(b<arr.length){
    if(arr[b]<a){
        a=arr[b]
        b++
    }
}
console.log(a);

