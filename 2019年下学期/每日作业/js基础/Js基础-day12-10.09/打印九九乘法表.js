var biao = ''
for (var i = 1; i <= 9; i++) {
    for (var x = 1; x <= i; x++) {
        biao+= x + 'x' + i + '=' + x * i + '\t '
        }
    biao+='\n'
}
var c = ''
for (var a =9; a >=1; a--) {
    for (var b = 1; b<=a; b++) {
        c+= b+ 'x' + a + '=' + a * b + '\t '
        }
    c+='\n'
}console.log(biao+c);