1. 使用循环打印九九乘法表

    ```js
    for (var i = 1; i <= 9; i++) {
        var sum = '';
        for (var j = 1; j <= i; j++) {
            sum += `${j}x${i}=${j*i} `;
        };
        console.log(sum);
    };
    ```

2. 使用循环打印图形 `* ``** ``***`

    ```js
    for (var i = 1; i <= 3; i++) {
        var str = '';
    for (var j = 0; j < i; j++) {
            str += '*';
        };
        console.log(str);
    };
    ```

3. 使用循环打印图形 `*** ``** ``*`

    ```js
    for (var i = 3; i >= 1; i--) {
        var str = '';
    for (var j = 0; j < i; j++) {
            str += '*';
        };
        console.log(str);
    };
    ```

4. 使用循环打印图形 `*** ``**` `*` `* ``** ``***`

    ```js
    for (var i = 3; i >= 1; i--) {
        var str = '';
    for (var j = 0; j < i; j++) {
            str += '*';
        };
        console.log(str);
    };
    for (var i = 1; i <= 3; i++) {
        var str = '';
        for (var j = 0; j < i; j++) {
            str += '*';
        };
        console.log(str);
    };
    ```

5. 使用循环打印图形 `-***` `--**` `---*`

    ```js
    for (var i = 1; i <= 3; i++) {
        var str = '';
    for (var j = 0; j < i; j++) {
            str += '-';
        };
        for (var k = 3; k >= i; k--) {
            str += '*';
        };
        console.log(str);
    }
    ```

6. 使用循环打印图形 `* ==== ``** === ``*** == ``**** =`

    ```js
    for (var i = 1; i <= 4; i++) {
        var str = '';
        for (var j = 0; j < i; j++) {
            str += '*';
        };
        for (var k = 0; k < i; k++) {
            str += ' ';
        };
        for (var g = 4; g >= i; g--) {
            str += '='
        }
        console.log(str);
    }
    ```