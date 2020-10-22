var sum=0
for(var i=1;i<=100;i++){
    b=parseInt (i%10)
    if(b==4){
        continue
    }
    sum+=i
}
console.log(sum);
