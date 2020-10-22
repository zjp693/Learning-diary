//1.导入模块
const express = require('express');
const path = require('path')
const routes = require('./routes')
//2.创建服务器
let app = express();
//2.1.静态网页托管
app.use(express.static(path.join(__dirname, 'public')))

require('./models/common')
// 3.处理请求 返回响应
//挂载
app.use(routes)
//4.监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，请访问：http://localhost:3000/');
});