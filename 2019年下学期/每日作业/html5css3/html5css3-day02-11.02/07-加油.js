/*7.一个加油站为了鼓励车主多加油，所以加的多有优惠。
     92号汽油，每升6元；如果大于20升，那么超出部分每升5.9；
     95号汽油，每升7元；如果大于30升，那么超出部分每升6.95
     编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。*/
let num = 95
let sheng = 60
let money = 0
if (num == 92) {
    if (sheng > 20) {
        money = 6 * 20
        money += 5.9 * (sheng - 20)
    } else {
        money = 6 * sheng
    }
} else if (num == 95) {
    if (sheng > 30) {
        money = 7 * 30
        money += 6.95 * (sheng - 30)
    } else {
        money = 7 * sheng
    }
}
console.log(num + '号汽油' + sheng + '升需要' + money + '钱')  