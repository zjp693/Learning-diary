//封装函数，实现数组去重，var arr = [9,10,6,6,1,9,3,5,6,4]
var arr = [9,10,6,6,1,9,3,5,6,4]
shuzi(arr)
function shuzi(arr){
    var arr1=[]
    for(var i=0;i<arr.length-1;i++){
            if(arr1.indexOf(arr[i])==-1){
                arr1.push(arr[i])
            }
        }
        console.log(arr1);
}