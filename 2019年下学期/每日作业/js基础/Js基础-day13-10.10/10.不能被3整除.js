//求1到100所有不能被3整除的整数的第一个大于2000的和
var b=0
for(var a=1;a<=100;a++){
    if(a%3!=0){
        b+=a
    if(b>2000){console.log(b) 
        break}
}}
//console.log(b)
