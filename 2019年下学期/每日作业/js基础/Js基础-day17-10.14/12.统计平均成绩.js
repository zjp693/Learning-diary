// 某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
//   第一组： 89，66，54
//   第二组： 77，93，68
//   第三组： 55,   45,  88
//   第四组： 71,   76,  75
var arr = [
      [89, 66, 54],
      [77, 93, 68],
      [55, 45, 88],
      [71, 76, 75]
    ]
    var sum = 0 //定义求和变量
    var num = 0 //定义全班人数的个数
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        //人数加一
        num++
        //计算某班的二维数组中所有成绩的和
        sum += arr[i][j]
      }
    }
    //求出全班的平均总成绩：总分/人数
    var average_grade = (sum / num).toFixed(1)
    console.log(`全班的平均成绩是${average_grade}`);