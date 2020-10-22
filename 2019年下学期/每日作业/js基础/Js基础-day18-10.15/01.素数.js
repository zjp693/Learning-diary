//输出2-100之间的所有素数（素数就是只能被1和其本身整除的数）
for (var i = 2; i < 100; i++) {
    var a = 1
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            a = 0
        }
    } 
    if (a == 1) { console.log(j) 
    }
}

