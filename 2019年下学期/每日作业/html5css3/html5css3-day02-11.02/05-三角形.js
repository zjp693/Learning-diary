var a = 3
var b = 4
var c = 5
if (
    (a + b > c && a + c > b && b + c > a)) {
    if (a == b && a == c) {
        console.log("这个三角形是等边三角形")
    } else if ((a == b && a == c) || (b == a && b == c)) {
        console.log("这个三角形是等腰三角形")
    } else if (
        a * a + b * b == c * c ||
        c * c + b * b == a * a ||
        a * a + c * c == b * b
    ) {
        console.log("这个三角形是直角三角形")
    } else {
        console.log("这个三角形是其他三角形")
    }
} else {
    console.log("这不是个三角形")
}  