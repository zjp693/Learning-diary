//定义数组 var arr = [11,22,33,44,55],
//要求：将arr数组中为偶数的元素打印到控制台
// 1.声明一个数组
var arr = [11,22,33,44,55]
// 2. 用循环遍历数组
for(var i=0;i<arr.length;i++){
    //3. 判断是不是偶数
    if(arr[i]%2==0){
        // 3.1 如果是就把这个数打印出来
        console.log(arr[i]);
        
    }
}