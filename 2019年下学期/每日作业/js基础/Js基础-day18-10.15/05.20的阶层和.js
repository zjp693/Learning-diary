//求1!+2!+3!+...+20!
 var a=0
for(var i=1;i<=20;i++){
   var b=1
    for(var j=1;j<=i;j++){
        b*=j

    }a+=b
}console.log(a);
