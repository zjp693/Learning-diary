// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const adminLoginRouter = express.Router();
//引入控制器代码
let { loginPage, loginUser, logoutUser } = require('../controllers/adminLoginCtrl');
// 3.创建路由
adminLoginRouter.get('/login', loginPage)
adminLoginRouter.post('/login', loginUser)
adminLoginRouter.get('/logout', logoutUser);
// 4.导出
module.exports = adminLoginRouter;