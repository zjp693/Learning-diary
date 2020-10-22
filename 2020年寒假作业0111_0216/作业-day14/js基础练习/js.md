## js简答题

1. ##### 函数的基本声明及调用格式是什么？其作用是什么？

   ```
    声明: function fn(){};
    调用: fn();
    作用: 为了让大量代码可以重复使用
   ```

2. ##### 说说你对函数形参和实参的理解，形参个数和实参必须相等吗？

   实参

   ```
   真实传给函数的参数，叫实参。实参可以是：常量、变量、表达式、函数等。无论实参是何种类型的量，在进行函数调用时，它们必须有确定的值，以便把这些值传送给形参。
   ```

   形参

   ```
   形式参数是指函数名后括号中的变量。因为形式参数只有在函数被调用的过程中才实例化（分配内存单元），所以叫形式参数。形式参数当函数调用完成之后就自动销毁了。因此形式参数只在函数中有效。
   ```

   简单的认为：**形参实例化之后其实相当于实参的一份临时拷贝。**

   形参个数和实参不是必须相等

3. ##### 函数为什么需要return返回值？

   ```js
   没有 return  可能函数调用会返回 undefined
   return 返回值返回想要的结果
   ```

4. ##### 函数表达式和函数声明式有什么区别？

   ```
   函数表达式: 定义的是一个变量，这个变量的值是函数
    函数声明式: 定义的是一个函数变量
   ```

## js编程题

1. ##### 编写一个函数：判断任意三个数中的最大值和最小值

   ```js
   function fn(num1,num2,num3){
    return(Math.max(num1,num2,num3))
    return(Math.min(num1,num2,num3))
   }
   console.log(fn(2,1,888))
   ```

2. ##### 编写一个函数：实现对 `n` 到 `m` 之间所有偶数的求和

   ```js
   function fn(num1,num2){
   var sum=0
   for(var i=num1;i<num2;i++){
       if(i%2==0){
           sum+=i
       }
   }
   return sum
   }
   console.log(fn(1,100))
   ```

3. ##### 编写一个函数：实现对传入的数组从小到大进行冒泡排序

   ```js
   function fn(arr){
   for(var i=0;i<arr.length-1;i++){
       for(var j=0;j<arr.length-i-1;j++){
           if(arr[j]>arr[j+1]){
               var step=arr[j+1]
               arr[j+1]=arr[j]
               arr[j]=step
           }
       }   
   }
   return arr
   }
   console.log(fn([6,2,1,88,66]))
   ```

4. ##### 编写一个函数：传入任意个数字，计算所有数之和

   ```js
   function fn(...rest) {
   var sum = 0;
   for (var i = 0; i < rest.length; i++) {
       sum += rest[i];
   }
   return sum
   }
   var result = fn(1, 2, 3, 4, 5);
   console.log(result);
   ```