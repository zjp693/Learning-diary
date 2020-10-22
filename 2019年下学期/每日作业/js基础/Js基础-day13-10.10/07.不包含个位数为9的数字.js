//求1到100之间的累加值，其中不包含个位数为9的数字（while实现）
var a=1
var b=0
while(a<100){
    if(a%10!=9){
       
    b+=a
}a++
}console.log(b)
