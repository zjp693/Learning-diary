// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const UserRouter = express.Router();
//引入控制器代码
let { showUser, editUser } = require('../controller/userCtrl');
// 3.创建路由
UserRouter.get('/', showUser)
UserRouter.get('/edit', editUser)
// 4.导出
module.exports = UserRouter;