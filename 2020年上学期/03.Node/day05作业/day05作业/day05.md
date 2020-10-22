# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
get,post
1.GET请求数据会被浏览器缓存，POST不会
2.GET请求的参数会存在浏览器历史中，POST不会
3.GET请求数据会
4.GET的安全性比POST低
5.GET请求有数据长度限制(最长2048个字符)，POST没有
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
// get方式
let xhr = new XMLHttpRequest() // 创建Ajax对象
xhr.open('get', '/url') // 设置请求方式和请求地址
xhr.send() // 发送请求
xhr.onreadystatechange = function(){ // 等待数据接收完毕
    console.log(xhr.responseText) // 获取数据
}

// post方式
let xhr = new XMLHttpRequest() // 创建Ajax对象
xhr.open('post', '/url') // 设置请求方式和请求地址
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded'or'application/json') // 设置POST请求头
xhr.send() // 发送请求
xhr.onreadystatechange = function(){ // 等待数据接收完毕
    console.log(xhr.responseText) // 获取数据
}
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
$.ajax({
    type:'',//get或post
    url:'',//请求的地址
    data:{},//如果不需要传，则注释掉 请求的参数
    success:function(data){//成功的回调函数
        console.log(data)
    }
})
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
// 1.引入art-template库
// 2.利用对应语法创建模板
// 3.套用模板生成数据
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
条件表达式
{{if admin}} 
 <p>admin</p> 
{{else if code > 0}} 
 <p>master</p> 
{{else}} 
 <p>error!</p> 
{{/if}}
  
遍历表达式
{{each list as value index}} 
 <li>{{index}} - {{value.user}}</li> 
{{/each}} 
```

6. 客户端和服务端的通信过程是怎么样的？
```js
客户端 发送请求到 服务端
服务端 响应后将结果传回 客户端
```

7. express怎么开放静态资源?
```js
	var express = require('express');
	var app = express();
	app.use(express.static('public')) //开放静态资源, 恩，一步解决
	app.listen(3000, function() {
	    console.log('run server__')
	})

```

8. express怎么读文件和写文件?
```js

var fs = require('fs')
读：fs.readFile('./data/hello.txt', function (error, data) {

写：fs.writeFile('./data/你好.md', '大家好，给大家介绍一下，我是Node.js', function (error) {
```



9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
1.json字符串转json对象,调用parse方法
2.json对象转为json字符串，调用JSON.stringify()方法
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
text：单行文本输入框，可以通过正整数的size控制框长度。
password：密码输入框。
radio：单选按钮，同一组的单选按钮必须要有相同的name。
checkbox：复选框，同一组的单选按钮必须要有相同的name。
button：普通按钮。
submit：提交按钮，每出现一次，一个 Submit 对象就会被创建。
reset：重置按钮，会重置当前表单中全部的内容。
```

11. form表单怎么序列化获取值表单的值？
```js
语法：$(form标签选择器).serialize()
```

12. form表单怎么阻止默认的提交行为?
```js
只要在form上添加代码就可以：onsubmit="return false;"
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
// 方1. 直接修改URL login -> index 然后回车跳转
// 方2. form表单的action属性值 填写的index.html对应地址，提交后可直接跳转
```