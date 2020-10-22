// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const indexRouter = express.Router();
//引入控制器代码
let { login, show, loginout } = require('../controller/indexCtrl');
// 3.创建路由
indexRouter.get('/', show)

indexRouter.post('/login', login)

indexRouter.get('/loginout', loginout)
// res.send(req.body)

// 4.导出
module.exports = indexRouter;