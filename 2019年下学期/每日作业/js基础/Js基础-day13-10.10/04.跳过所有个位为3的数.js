//4.  求整数1～100的累加值，但要求跳过所有个位为3的数(while实现)
var a=1
var b=0
while(a<100){
    if(a%10!=3){
       
    b+=a
}a++
}console.log(b)
