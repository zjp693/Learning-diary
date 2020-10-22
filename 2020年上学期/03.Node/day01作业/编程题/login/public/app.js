// 引入框架模块
const express = require('express')
const fs = require('fs')
// 使用框架模块创建服务
const app = express()

// 使用express中间件
app.use(express, urlencoded())
// 使用fs获取data.json文件
var result = JSON.parse(fs.readFileSync('./data.json'));
//使用post方法  body来获取用户输入的内容
app.use('/login', (req, res) => {
    // 使用body获取用户输入内容
    console.log(req.body.username);
    // 用body获取数据对比 data.json中的数据
    if (req.body.username == 'admin' && req.body.password == '123456') {
        res.send('登入成功')
    }
    else {
        res.send('用户名或密码错误，请重新登录！')
    }
})

//指定服务端口号 并启动服务
app.listen(80, () => {
    console.log("服务启动: http://localhost")
})