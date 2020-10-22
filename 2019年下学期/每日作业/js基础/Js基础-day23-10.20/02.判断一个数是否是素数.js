//写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
function zhishu(n) {
    var zhishu = true;//假设是质数
    for (var i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            //除尽了说明不是素数
            zhishu = false;
        }
    }
    //返回值 布尔值
    return zhishu;
}
console.log(zhishu(5));
