## js解答题

1. ##### 请简述`typeof`的用途，`typeof`的返回结果都是什么数据类型？

   作用：判断简单的数据类型
   返回值的数据类型：字符串
   返回值有哪六种： String 字符串、Number 数值、Boolean 布尔、Undefined 未定义、Object 数组 、function 功能

2. ##### 数据类型转换，转Number类型有哪些方式？

   Number()

   ```js
   注意：如果是字符串是纯数字，则转换为数字；如果字符串中有非数字，则转换结果为NaN；如果字符 串为空串或者是空格，则结果为0；如果是Boolean类型，true为1，false为0；如果是null,结果为0；如果是undefined，结果为NaN.
   ```

    parseInt()

   ```
   把一个字符串转换为整数。可以将一个字符串中的整数内容解析出来，如parseInt("123.123a123") 结果为123。
   ```

   parseFloat()

   ```
   把一个字符串转换为浮点数。可以获得有效的小数。
   ```

   

3.  parseInt()方法 ,把一个字符串转换为整数。**可以将一个字符串中的整数内容解析出来，如parseInt("123.123a123") 结果为123。**

   ​      parseFloat()，把一个字符串转换为浮点数。**可以获得有效的小数。**

4. ##### 数据类型转换，转字符串类型有哪些方式？哪种方式存在什么限制？

   tostring()

   ```js
   调用被转换数据的tostring()方法, 就可以将其他类型转换为string
   而且该方法不会影响原变量，它会将结果返回
   注意：null和undefined这两个值没有tostring()方法，如果使用，会报错
   ```

   string()

   ```js
   string()函数与tostring()方法类似，
   不过string()函数可以转换null和undefined，而tostring()方法不可以
   ```

   隐式转换：用运算符 + 进行转换

   ```js
   var obj = null;
   obj = obj + "";
   任何值和字符串做加法，都会将其转换为字符串，而后做拼接
   可以利用这个特点，将任意数据类型转换为string，只 +""
   ```

   

5. 数据类型转换，转布尔类型有某种方式？

   boolean（变量名）

   !!（变量名）

   ```js
   var num123 = 123,
   num123 = Boolean(num123); //true
   num123 = !!(num123); //true
   ```

6. ##### 什么是隐式类型转换，有什么是隐式类型转换？

   隐式类型转换：数据的类型在不用人工干预的情况下进行转换的行为

   

   转成字串类型：+（字符串连接符）

   转成数字类型：++ /-（自增自减运算符）+-* /％（算术运算符）> <> = <= ==！= ===！===（关系运算符）

   转成boolean类型：！（逻辑非运算符）



## js编程题

 1. ##### 回答下面代码中的结果

    ```js
    console.log(typeof [])      //Object
    console.log(typeof [666])   //Object
    console.log(typeof [{age:18}])      //object
    console.log(typeof NaN)     //Number
    console.log(typeof 'true')      //String
    console.log(typeof typeof undefined)    //String
    ```

 2. ##### 说出下面元素转 Number类型的结果

    ```js
    1) ''       //0
    2) '666'    //666
    3) '88&'    //NaN
    4) true     //1
    5) false    //0
    6) null     //0
    7) undefined       //NaN
    8) { }      //NaN
    9) {name:"9",age:9}     //NaN
    10) []      //0
    11) [1]     //1
    12) [1,1]   //NaN
    13) [[]]    //0
    14) [[1]]   //1
    ```

 3. ##### 说出下面元素转 String类型的结果

    ```js
    1) 666      //666
    2) ''       //
    3) true     //true
    4) false    //false
    5) null     //null
    6) undefined       //undefined
    7) { }      //[object Object]
    8) {name:"9",age:9}     //[object Object]
    9) []       //
    10) [1,'A']     //1,A
    11) [8,{age:8},8]       //8,[object Object],8
    12) [1,[2,[3]]]     //1,2,3
    ```

 4. ##### 说出下面元素转 Boolean类型的结果

    ```js
    1) 0        //false
    2) 1        //true
    3) -1       //true
    4) ''       //false
    5) '0'      //true
    6) NaN      //false
    7) null     //false
    8) undefined        //false
    9) { }      //true
    10) {name:"9",age:9}        //true
    11) []      //true
    11) [0]     //true
    12) [false]     //true
    12) [null,undefined]       //true
    ```