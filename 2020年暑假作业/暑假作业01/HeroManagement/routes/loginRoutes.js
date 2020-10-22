// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const loginRouter = express.Router();
// 3.引入控制器方法
const { adminlogin, loginUser } = require('../controllers/loginCtrl');
// 4.创建具体路由

//登陆后的首页

loginRouter.get('/', adminlogin)

loginRouter.post('/', loginUser)

// 5.导出路由
module.exports = loginRouter;