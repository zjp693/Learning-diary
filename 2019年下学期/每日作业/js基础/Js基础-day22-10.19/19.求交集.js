//19.给定两个数组，编写一个函数来计算它们的交集。
function same(arr1, arr2) {
    var arr3 = []
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) != -1 && arr3.indexOf(arr1[i]) == -1) {
        arr3[arr3.length] = arr1[i]
      }
  
    }
    return arr3
  }
  console.log(same([1, 2, 1, 2, 3, 3, 4, 5], [1, 2, 3, 6, 7, 4, 5]));