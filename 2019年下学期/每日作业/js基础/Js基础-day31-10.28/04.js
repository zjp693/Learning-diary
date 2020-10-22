// 、补全函数完成功能，传入数组中找到任意3个数字(数字不能重复使用)的和是10的倍数，将所有组合打印下来

//创建数组arr
var arr = [1,4,5,6,10,20,30,40]; 

function printSumIs10MoM(arr){  

    //定义变量sum 求出任意3个数字的和
    let sum = 0;
    //创建三个循环嵌套
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = i+1 ; j < arr.length ; j++){
            for(var k = j+1 ; k < arr.length ; k++){
                //求出 和值
                sum = arr[i] + arr[j] + arr[k];
                    //判断 sum 余 10 是否为0
                    if(sum % 10 == 0){
                        //为0就 打印3个数
                        console.log(arr[i]+" "+arr[j]+" "+arr[k]);
                        
                        //将sum清空
                        sum = 0;
                }
            }
        }
    }
}

//调用函数
printSumIs10MoM(arr);

