// 定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];遍历arrA中的所有元素并按逆序存储在数组arrB中
// 并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，arrB的结果如下，var arrB = ["e","d","c","b","a"]


//1.定义2个长度为5的字符串数组arrA和arrB
var arrA=['a','b','c','d','e']
var arrB=[]
//2.遍历arrA中的所有元素并按逆序存储在数组arrB中

    for(var i=arrA.length-1;i>=0;i--){
    // 3.将遍历的值添加在空数组中
    arrB.push(arrA[i])
    //4.打印
}console.log(arrB);
