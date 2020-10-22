//写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5
test(90)
function test(n) {
    var flag = 0;
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            flag++;
            if (flag == 1) {
                console.log(n + "=" + i);
            } else {
                console.log("×" + i);
            }
            n = n / i;
            i--;
        }
    }
    if (flag == 0) {
        console.log(n + "为质数");
    } else {
        console.log("共有" + flag + "个质因数");
    }
}