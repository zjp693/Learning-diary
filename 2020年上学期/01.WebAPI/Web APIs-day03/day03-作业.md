# 选择题

1. 下面关于获取表单的value值正确的写法是（C）
```html
 <input type="text" value="我是表单">
```
 A、document.querySelector('input').innerText

 B、document.querySelector('input').innerHTML

 C、document.querySelector('input').value

 D、document.querySelector('input').style.innerText

2. 在JavaScript中，下面关于表单的事件说法错误的是(C )

 A、onfocus是当获取到焦点时触发

 B、onblur是当表单失去焦点时触发

 C、onclick这个事件，表单元素是不具备的

 D、oninput是当用户在表单中输入值时触发


3. 要完成禁用按钮效果，补充1.处代码（B）

```js
<button id="btn">禁用文本框</button>

<input type="text" id="txt" value="你好">

<script>
var oBtn = document.getElementById('btn');

var oTxt = document.getElementById('txt');

oBtn.onclick = function () {

1.补充代码

}

</script>
```

A、oTxt.disabled = “”
B、oTxt.disabled = true	 
C、oTxt.disabled = disabled 
D、oTxt.disabled = false

4. 下面对于JavaScript中的复选框(checkbox)的说法不正确的是：(A)

A、如果需将一个复选框选中，可以将复选框的selected属性设为true

B、如果需将一个复选框选中，可以将复选框的checked属性设为true

C、如果需将一个复选框选中，可以将复选框的checked属性设为"true"

D、如果需将一个复选框选中，可以将复选框的checked属性设为"checked"


5. 	在JavaScript中，下面代码表示获取到文本框的值，则下列选项中验证文本框为空的条件表达式不正确的是 (   c)
```js
var usrName = document.getElementById("txtName").value;
```

A、usrName ==""

B、usrName.length<=0

C、usrName=""

D、usrName.length==0c

# 简答题

第1题. 操作表单元素常用属性有哪些，分别说明作用是什么？
```js
 表单的value属性

  语法: 元素.value = "值"

 表单的type属性

  语法: 元素.type = "值" (值必须是html规定的)

 checked属性

  语法: 元素.checked = boolean true代表选中 false代表不选中 (只要不是空字符串都是可以转换成true)

 disabled属性

  语法: 元素.disabled = boolean true代表不能点(禁用)  false代表能点(可用)

 selected属性

  语法: 元素.selected = boolean true代表选中
```
第2题. 操作元素显示和隐藏的方式有哪些?
```js
display=”none”

visibility=”hidden

with:0
hight:0
```



# 编程题

需求1. 实现隔行变色的效果(效果在附件):
- 页面中有一个按钮和一个ul,ul里面有10个li元素

- 点击按钮，实现10个li的隔行变色效果，奇数行是红色，偶数行是黄色

- 鼠标经过li元素上面，当前的这个li就是绿色，鼠标离开这个li，这个li显示原来的颜色

- ```js
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script>
          // 需求1.实现隔行变色的效果(效果在附件):
  
          //     -页面中有一个按钮和一个ul, ul里面有10个li元素 -
          //     点击按钮， 实现10个li的隔行变色效果， 奇数行是红色， 偶数行是黄色 -
          //     鼠标经过li元素上面， 当前的这个li就是绿色， 鼠标离开这个li， 这个li显示原来的颜色
      </script>
  </head>
  
  <body>
      <ul>
          <li>红旗</li>
          <li>五菱宏光</li>
          <li>奔驰</li>
          <li>兰博基尼</li>
          <li>哈弗</li>
          <li>奥拓</li>
          <li>奥迪</li>
          <li>悍马</li>
      </ul>
      <button>按钮</button>
      <script>
          const lis = document.querySelector('ul').children;
          const btn = document.querySelector('button');
        let flag = true;
          btn.addEventListener("click", function () {
              console.log(flag)
              if (flag) {
                  for (let i = 0; i < lis.length; i++) {
                      function green() {
                          lis[i].style.background = "green"
                      }
  
                      function red() {
                          if (i % 2 == 1) {
                              lis[i].style.background = "red";
                          } else {
                              lis[i].style.background = "yellow"
                          }
                      }
                      if (i % 2 == 1) {
                          lis[i].style.background = "red";
                      } else {
                          lis[i].style.background = "yellow"
                      }
                      lis[i].onmouseover = function () {
                          lis[i].style.background = "green"
                      }
                      lis[i].onmouseout = function () {
                          if (i % 2 == 1) {
                              lis[i].style.background = "red";
                          } else {
                              lis[i].style.background = "yellow"
                          }
                      }
                  }
                  flag = false;
                  console.log(false);
  
              } else {
                  for (let i = 0; i < lis.length; i++) {
                      lis[i].style.background = "#fff";
                  }
                  for (let i = 0; i < lis.length; i++) {
                      lis[i].onmouseover = null;
                      lis[i].onmouseout = null;
                  }
                  flag = true;
                  console.log(flag);
              }
          })
      </script>
  </body>
  
  </html>
  ```
  
  

需求2. 简单js表单校验效果(素材和效果在附件里面)：布局和功能都需要自己完成
- 具体需求请看word里面。

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 600px;
            margin: 100px auto;
        }

        .message {
            display: inline-block;
            font-size: 12px;
            color: #999;
            background: url(..附件/image/mess.png) no-repeat left center;
            padding-left: 20px;
        }

        .wrong {
            color: red;
            background-image: url(..附件/image/wrong.png);
        }

        .right {
            color: green;
            background-image: url(images/right.png);
        }
    </style>
</head>

<body>
    <div class="register">
        <input type="text" class="ipt" placeholder="请输入你的成绩">
        <p class="message">请输入你的成绩</p>
    </div>
    <script>
        // 1.获取元素
        var ipt = document.querySelector('.ipt');
        var message = document.querySelector('.message');
        //2. 注册事件 失去焦点
        ipt.onblur = function () {
      
            if (this.value >= 0 && this.value <= 100) {
                // console.log('错误');
                message.className = 'message right';
                message.innerHTML = '您输入成绩正确';
            } else if (this.value <= 0) {
                message.className = 'message wrong';
                message.innerHTML = '输入成绩不能小于0';
            } else if (this.value >= 100) {
                message.className = 'message wrong';
                message.innerHTML = '输入成绩不能大于100';
            }
            else if (typeof (this.value) != Number) {
                message.className = 'message wrong';
                message.innerHTML = '请您输入数字';
            }
        }
    </script>
</body>

</html>
```

