//写一个函数，输入某年某月某日，判断这一天是一年中的第几天   1998  3   1


var dayshu = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30]
function num(n, y, r) {
    var sum = 0
    for (var i = 1; i <= dayshu.length; i++) {
        sum += dayshu[i]
        if (i == y - 1) {
            console.log(sum)
            break
        }
    }
    if (n % 400 == 0 || n % 4 == 0 && a % 100 !== 0) {
        sum = sum + r + 1
        console.log(n + '年' + '的第' + sum + '天');
    } else {
        sum = sum + r
        console.log(n + '年' + '的第' + sum + '天');

    }
} num(2015, 3, 2)