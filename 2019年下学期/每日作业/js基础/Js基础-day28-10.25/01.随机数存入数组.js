//定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），
//遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组

//随机数的语法
//取[min,max]  (Math.random() *(max-min+1)+min);
let arr=[]
for(let i=1;i<=5;i++){
    let shu=Math.floor(Math.random() *(100-20+1)+20)
if(shu<50){
    shu=0
    arr.push(shu)
}else{
    arr.push(shu)
}
}
console.log(arr);




