// 数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
var a=[10, 5, 34, 59, 98]
var max=a[0]
for(var b=0;b<a.length;b++){
    if(max<a[b]){
        max=a[b]
    }
}console.log(max);
