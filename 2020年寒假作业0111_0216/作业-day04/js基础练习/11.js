 var a = 10,
b = ++a,
c = a--,
d = c++ + ++b + --a;
console.log(a, b, c, d);

 var a = 100,
b = --a,
c = a-- + b++,
d = a - b-- + ++c;
console.log(a, b, c, d);