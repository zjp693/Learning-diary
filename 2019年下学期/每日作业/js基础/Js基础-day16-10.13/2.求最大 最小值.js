//求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]	
var arr =  [11, 32,55, 47,79,23]
var a=arr[0]
var b=arr[0]
for (var i = 0; i < arr.length; i++){
if(arr[i]>a){
    a=arr[i]}
if(b>arr[i]){
 b=arr[i]}
    }
console.log(a,b);
