// 10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
//     1.去除数组中重复的内容，只保留唯一的元素。
//     2.以下列格式打印数组：[9,10,6,1,3,5,4]
var a=[9,10,6,6,1,9,3,5,6,4]
var newB=[]
for(var i=0;i<a.length;i++){
if(newB.indexOf(a[i])===-1){
newB[newB.length]=a[i]
}}
console.log(newB);
//newB.indexOf(a[i])===-1
