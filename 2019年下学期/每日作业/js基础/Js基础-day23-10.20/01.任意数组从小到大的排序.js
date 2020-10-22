//1.用函数实现任意数组从小到大的排序，不允许使用sort 
var arr=[1,2,3,4,5,6]
for(var j=0;j<=arr.length-1;j++)
for(var i=0;i<=arr.length-1-j;i++){
if(arr[i]<arr[i+1]){
    var j=arr[i]
    arr[i]=arr[i+1]
    arr[i+1]=j
}
}console.log(arr);


