//5.  求100到200之间所有的奇数的和（while实现）
var a=100
var b=0
while(a<200){
    if(a%2!=0){
        b+=a
    }a++
}console.log(b);
