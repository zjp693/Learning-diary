// 封装一个函数，实现数组var arr = [23,45,78,98,13,89,5]，从大到小排序。
var arr = [23,45,78,98,13,89,5]
shuzi(arr)
function shuzi(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var T=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=T
            }
        }
    }
    console.log(arr);
}