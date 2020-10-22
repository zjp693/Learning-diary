//打印1-100中前三个是17的整数倍的数。
var b=1
for(var a=1;a<=100;a++){
    if(a%17==0){b++
        console.log(a);
        if(b>3){
            break
        }
        
    }
}