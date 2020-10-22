// 求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引，如果这样的元素个数大于1，则返回索引最小的数的索引
// var arr= [1,2,4,5,10,100,2,-22]
// var a=[]
// var j=0
// for(var i=0;i<arr.length;i++){
//     if( a>arr[i]){
//         a[a.length]=arr[i]
        
//    }var z=a.indexOf(a[i])
// } 
// console.log(z);

// 分析 ：
// 首先创建两个变量
// 一个变量储存最小值，一个变量储存索引

var index = 0; // 储存索引
var arr= [1,2,4,5,10,100,2,-22];
var min = arr[0];

// 遍历数组
for(var i = 0; i < arr.length; i++){

    if(arr[i] < min){

        min = arr[i];
        index = i;
    }
}
if(min > 1){
   console.log(index);
}else {

   console.log(min);
}
