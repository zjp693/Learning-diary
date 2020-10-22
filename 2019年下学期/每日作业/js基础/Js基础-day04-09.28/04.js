var a = 1; var b = ++a + ++a;   console.log(b);  //  5  ++a=2 ++a=3
var a = 1; var b = a++ + ++a;   console.log(b);  // 4  a++=1  ++a=3
var a = 1; var b = a++ + a++;   console.log(b);  // 3   a++=1  a++=2
var a = 1; var b = ++a + a++;   console.log(b);  // 4   ++a=2  a++=2