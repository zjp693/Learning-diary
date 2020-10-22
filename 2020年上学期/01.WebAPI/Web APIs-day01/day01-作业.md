# 选择题

1. 有关获取元素方法的说法错误的是（ D ）

   A、getElementById()返回的是单个DOM对象

   B、getElementsByTagName()返回的是多个DOM对象

   C、querySelectorAll()返回的是多个DOM对象

   D、document.body等价于document.getElementsByTagName("body")

2. 下面HTML代码中，可以正确获取p元素的方法是（B   ）
```html
  <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />D
    <title></title>B
</head>
<body>
    <div></div>
    <div></div>
    <p></p>
    <strong></strong>
</body>
</html>

```

   A、document.getElementsByTagName("p")

   B、document.getElementsByTagName("p")[0]

   C、document.getElementsByTagName("p")[1]

   D、getElementsByTagName("p")[0]

3. 下列关于DOM模型节点访问说法正确是（无）

   A、可以根据节点ID访问多个对象

   B、getElementsByTagName方法是根据节点的name属性访问节点

   C、querySelector方法的作用是获取CSS选择器的第一个元素

   D、getElementsById的我们作用是根据name值获取对象集合集合

4. 下面HTML代码中，可以正确获取第二个ul元素的方法是（ D  ）
```html
  <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>D
</head>
<body>
   <ul>
       <li>1</li>
       <li>2</li>
       <li>
           <ul>
              <li>31</li>
              <li>32</li>   
           </ul>
       </li>
  </ul>
</body>
</html>
```
   A、document.querySelectorAll('ul')[0]

   B、document.querySelector('ul')[1]

   C、document.getElementsByTagName('ul')[0]

   D、document.querySelectorAll('ul')[1]

5. 执行以下代码后的结果是（A）
```html
  <button id="oyx">按钮</button>
  <script>
    var btn = document.querySelectorAll("button")
    btn.onclick = function(){
       console.log("11")
    }
  </script>
```


  A、没有反应

  B、在控制台输出11

  C、在页面弹出框显示11

  D、“按钮”文字变成11


# 简答题

1. js由哪几部分构成，DOM的顶级对象是谁？
```js
1.核心（ECMAScript）
2.文档对象模型（DOM）
3.浏览器对象模型（BOM）

DOM的顶级对象是document
```
2. 列举获取DOM元素的方法？
```js
通过ID获取（getElementById）
通过name属性（getElementsByName）
通过标签名（getElementsByTagName）
通过类名（getElementsByClassName）
通过选择器获取一个元素（querySelector）
通过选择器获取一组元素（querySelectorAll）
获取html的方法（document.documentElement）
document.documentElement是专门获取html这个标签的
获取body的方法（document.body）
document.body是专门获取body这个标签的。
```
3. 获取html和body标签的方式是什么？
```js
获取html的方法（document.documentElement）
document.documentElement是专门获取html这个标签的
获取body的方法（document.body）
document.body是专门获取body这个标签的
```
4. 事件三要素是什么？并举几个常见的事件类型? 
```js
事件源    事件类型    事件处理程序

```

# 编程题

需求1.获取元素:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="mod-tabs">
    <ul>
        <li>list1</li>
        <li>list2</li>
        <li id="list3">list3</li>
        <li>
           <ul>
              <li>list41</li>
              <li>list42</li>
           </ul>
        </li>
        <li>list5</li>
    </ul>
    <button class="btn">点我</button>
 </div>
</body>
</html>
```
1. 获取上面代码中的html元素
```js
 console.log(document.documentElement);
```
2. 获取上面代码中的body元素
```js
 console.log(document.body)
```
3. 获取上面代码中的按钮,通过三种方式
```js
var arr = document.getElementsByClassName('btn')
        console.log(arr[0]);

var btns = document.querySelector('button');
         console.log(btns);

var btns = document.getElementsByClassName('btn')[0]
        console.log(btns)
```
4. 获取上面代码中所有的li元素,用2种方式
```js
var lis=document.getElementsByTagName('li');
        console.log(lis);

var tet = document.querySelectorAll('li')
        console.log(tet)
```
5. 获取上面代码中list3元素
```js
var ids=document.getElementById('list3');
        console.log(ids);

 var ids = document.querySelectorAll('ul:first-child li')[2]
        console.log(ids)
```
6. 获取第二个ul中的所有li
```js
var ids = document.querySelectorAll('ul:last-child li')
       console.log(ids)
```

需求2. 鼠标的事件:
- 在页面中创建一个div，给这个div添加点击事件，在页面中显示，我被点击了，

- 鼠标进入事件，在页面中显示，鼠标移入到了盒子上，

- 鼠标离开事件，在页面中显示，鼠标离开了盒子

  ```js
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          div {
              margin: 100px auto;
              width: 200px;
              height: 200px;
              background-color: pink;
          }
      </style>
  </head>
  
  <body>
      <div></div>
      <script>
          var div = document.querySelector('div');
          div.onclick = function () {
              alert('我被选中了');
          }
          div.onmouseover = function () {
              alert('鼠标移入到了盒子上');
          }
          div.onmouseout = function () {
              alert('鼠标离开到了盒子上');
          }
      </script>
  </body>
  </body>
  
  </html>
  ```

  
