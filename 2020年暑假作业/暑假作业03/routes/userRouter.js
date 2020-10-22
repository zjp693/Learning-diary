// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const userRouter = express.Router();
// 3.引入控制器方法
let { userIndexPage, userAddPage, insertOneUser, deleteOneUser, findByFilter } = require('../controllers/userCtrl');
// 4.创建具体路由
// 4.1显示用户管理首页
userRouter.get('/', userIndexPage)
// 4.2显示用户添加页面
userRouter.get('/add', userAddPage)
// 4.3添加用户
userRouter.post('/addOne', insertOneUser)
// 4.4删除用户
userRouter.delete('/deleteOne', deleteOneUser)
// 4.5模糊查询
userRouter.get('/findByFilter', findByFilter)
// 5.导出路由
module.exports = userRouter;