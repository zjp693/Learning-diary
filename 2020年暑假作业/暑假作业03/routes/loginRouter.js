// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const loginRouter = express.Router();
// 3.引入控制器方法
const { loginPage, loginUser } = require('../controllers/loginCtrl');
// 4.创建具体路由
// 4.1显示登录页面
loginRouter.get('/login', loginPage);
// 4.2处理登录业务
loginRouter.post('/login', loginUser);
// 5.导出路由
module.exports = loginRouter;