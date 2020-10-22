// 现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列
var arr1 = [1,7,9,11,8,15,10,19]
var arr2 =[2,1,6,8,10]
var arr3=[].concat(arr1,arr2)
var arr4=[]
for(var i=0;i<arr3.length;i++){
    if(arr4.indexOf(arr3[i])===-1){
        arr4[arr4.length]=arr3[i]
    }arr4.sort((a, b) => {
        return a - b
   })
}console.log(arr4);
