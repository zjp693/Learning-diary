## js简答题

1. ##### 网页的三种弹出框分别是什么？作用分别是什么？

   alert()警告框

   confirm（）确认框 

   turn确认返回 

   false否定返回

    prompt输入框 可以获取用户输入的值 返回是字符串

2. ##### 用户输入框，获取到值的数据类型是什么？

    字符串

## js编程题

1. ##### 打开网页时弹出：全栈牛逼！！！(只有确定键)

   ```js
   <script>
     alert("全栈牛逼!!!");
   </script>
   ```

2. ##### 让用户可以在网页输入年龄

   ```js
   <script>
     var age = prompt("请输入您的年龄");
   </script>
   ```

3. ##### 打开网页弹出：您打开了一个网页，是否继续？（有确定键和取消键）

   ```js
   <script>
     var result = confirm("您打开了一个网页,是否继续?");
   </script>
   ```

4. ##### 让用户输入一个数字，实现判断该数字是小数还是整数并告诉用户

   ```js
   var num = +prompt("请输入一个数字:");
   var temp = parseInt(num);
   if (temp == num) {
     console.log("是整数");
   } else {
     console.log("是小数");
   }
   ```

S