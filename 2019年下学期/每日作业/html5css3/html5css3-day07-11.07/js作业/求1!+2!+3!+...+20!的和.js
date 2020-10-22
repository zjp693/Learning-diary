//求1!+2!+3!+...+20!的和
var b=0,c=1

for(var i=1;i<=20;i++){
    c*=i
    b+=c
}
console.log(b);
