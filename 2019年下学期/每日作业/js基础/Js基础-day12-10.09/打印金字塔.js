//定义行数 为 4
var row = 4;
//外循环遍历 i  i范围在 1-row 中
for(var i = 1 ; i <= row ; i++){
    //定义空字符串
    var str = "";
    //内第一循环  遍历j  范围在 i - row 中  
    for(var j = i ; j < row ; j++){
        //str 添加-符号
        str += "-";
    }
    //内第二循环 遍历k  每次循环都添加2*i-1个*号
    for(var k = 0 ; k < 2*i-1 ; k++){
        //str添加*号
        str += "*";
    }
    console.log(str);
}
//外循环遍历 i  i范围在 row-1 - 0 范围内
for(var i = row-1 ; i > 0 ; i--){

    //定义空字符串
    var str = "";
    //内第一循环  遍历j  范围在 i - row 中  
    for(var j = i ; j < row ; j++){
        //str 添加-符号
        str += "-";
    }
    //内第二循环 遍历k  每次循环都添加2*i-1个*号
    for(var k = 0 ; k < 2*i-1 ; k++){
        //str添加*号
        str += "*";
    }
    console.log(str);
}