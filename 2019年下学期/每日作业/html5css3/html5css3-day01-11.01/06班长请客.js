//6. 接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐。
//    若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够

var a = 1800
if (a >= 2000) { console.log("请大家吃西餐") }
else if (a >= 1500) { console.log("请大家吃快餐") }
else if (a > 1000 && a < 1500) { console.log("请大家喝饮料") }
else if (a > 500 && a < 1000) { console.log("请大家吃棒棒糖") }
else if (a < 500) { console.log("提醒班长下次把钱带够") }