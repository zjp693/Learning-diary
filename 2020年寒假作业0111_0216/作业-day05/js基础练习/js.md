## js解答题
1. ##### 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？

   0为false,非0为true

2. ##### 100+100结果是200，那么100+‘100’结果是什么，为什么？

   100100  此时+为拼接的意思

3. ##### 请说说 `+` 号有几层含义，分别是什么？

   数学意义上的相加 

   作用：可以把string类型转换成number类型

   字符串的连接符：‘我爱你’ + ‘中国’ 会得到： ‘我爱你中国

4. ##### 前--和后--的区别是什么？

   前--：运算时减加一

   后--：运算后减加一


## js编程题

1. ##### 如何能够判断一个数字是小数还是整数？

   ```js
   	var number = 1
   if (number % 1 == 0) {
       console.log("是整数");
   } else {
       console.log("是小数");
   }
   ```

2. ##### 探究题：详见下面代码

   ```js
    isNaN('') // false  " "转换为数字类型的0,返回false
    isNaN('1A') // true  1A不是数字类型，返回true
    isNaN(true) // false  true转换为数字类型的1,返回false
    isNaN({}) // true  {}转换NAN不是数字类型，返回true
    isNaN([1,1]) // true  
    // 探究：根据isNaN的作用你是否能说明出现上面现象的原因
   isNaN方法可以检测其参数是否为非数值类型。
   NaN是not a number的缩写形式。
   如果参数是NaN或者非数字，此方法返回true，否则返回false。
   
   NaN的特点
   1.任何数值除以非数值（字符串、undefined、object）都会返回NaN。
   2.NaN与任何值都不相等，包括NaN自身
   
   isNaN()方法
   1.该方法在接收参数后，如果传入的参数类型不是数字类型，会尝试将该参数转换为数字类型。
   2.如接受的参数是空，比如[]（空数组）、“”（空字符串）等，会在过程中转换为数字类型的0，从而返回false;
   3.如果传入的参数为Null，也会返回false，根据国外StackOverFlow论坛中的答主解释，在isNaN函数里，null是空值，就是0，所以会返回false
   ```

3. ##### 打印下面的输出结果

   ```js
    var num1 = 12, num2 = '12', num3 = '', num4;
    console.log(num1 + num2);//1212
    console.log(num1 + +num3);//12
    console.log(num1 + +num4);//NaN
    console.log(+num2 + !!num3);//12
    console.log(!!num2 + !!num4);//1
   ```

4. ##### 打印下面的输出结果

   ```js
    1) var a = 10,
         b = ++a,
         c = a--,
         d = c++ + ++b + --a;
     console.log(a, b, c, d);// 9 12 12 32
   
    2) var a = 100,
         b = --a,
         c = a-- + b++,
         d = a - b-- + ++c;
     console.log(a, b, c, d);//98 99 199 197
   ```
