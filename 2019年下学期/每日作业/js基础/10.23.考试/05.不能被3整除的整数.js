//求300到400所有不能被3整除的整数的第一个大于2000的和。
var num=0
for(var i=300;i<400;i++){
    if(i%3 != 0){
       num+=i
       if(num>2000){
           console.log(num);
           break
       }
    }
}