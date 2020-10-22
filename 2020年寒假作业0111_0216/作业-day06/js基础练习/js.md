## js解答题

1. ##### 算数运算符都有哪些？

   ```
   有+，-，*，/，/%等等
   ```

2. ##### NaN和任何值比较的结果都是什么？包括和自身比较吗？

   ```
   NaN和任何值比较都是false，包括他本身
   ```

3. ##### == 和 === 的区别在哪？

   ```
   ==是如果数据类型不相等,则会进行隐式转换进行比较,===如果数据类型不相等则直接为falsse
   ```


4. ##### 逻辑运算符有哪些, 逻辑运算的规则有哪些

   ```
   && 两边为真则为true || 一边为真则为true ! 取反
   ```


## js编程题

1. ##### `typeof` 无法显示出的数据类型名称有什么？为什么？
   
   ```js
   
   ```
   
2. ##### 判断下面结果的布尔值

   ```js
   333 == '333' `true` 
   
   666 == [666] `false` 
   
   '999' == [999] `true` 
   
   NaN == NaN `false`
   
   NaN === NaN `false` 
   
   undefined == null `true`
   
   undefined === null `false` 
   
   [] == [] `true`
   
   [] === [] `true`
   
   [] == 0 `true` 
   
   ![] == 0 `false`
   
   [] == ![] `false` 
   ```

   ##### 3.打印输出下面的结果

   ```js
   1. true && !true `faslse`
   2. false || !false `true`
   3. false || !true && !false `false`
   4. true && !false || false `true`
   5. undefined && true `false`
   6. 2+2 > 5 || 3-3 <=0 && !undefined `true`
   ```

   #####  4.打印输出下面的结果

   ```js
   var a = 10; var b = a++; console.log(b>=a);`false` 
   var c = b + 'a'; console.log(c); `10a`
   console.log(c == ('a' + b))`false`
   ```

   