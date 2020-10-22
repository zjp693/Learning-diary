// 左奇右偶
//10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
var a=[26,67,49,38,52,66,7,71,56,87]
var b=[]
for(var i=0;i<a.length;i++){
    if(a[i]%2!=0){
        b[b.length]=a[i]
    }
}
for(var i=0;i<a.length;i++){
    if(a[i]%2==0){
        b[b.length]=a[i]
    }
}console.log(b);

