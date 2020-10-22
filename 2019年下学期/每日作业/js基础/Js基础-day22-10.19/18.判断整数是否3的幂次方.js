
//18.给定一个整数，写一个函数来判断它是否是 3 的幂次方
function judge(num) {
  while (num % 3 == 0) {
    num /= 3
  }
  if (num == 1) {
    return true
  } else {
    return false
  }
}
console.log(judge(9));