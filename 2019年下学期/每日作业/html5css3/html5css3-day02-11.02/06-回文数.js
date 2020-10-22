//6. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）

let num = 12321
let gw = num % 10
let sw = parseInt((num / 10) % 10)
let bw = parseInt((num / 100) % 10)
let qw = parseInt((num / 1000) % 10)
let ww = parseInt(num / 10000);
if (gw == ww && sw == qw) {
    console.log(`是回文数`)
} else {
    console.log('不是会文数')
}