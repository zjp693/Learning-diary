// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const adminUsersRouter = express.Router();
//引入控制器代码
// let { 控制器的导出的接口} = require('控制器的路径');
// 3.创建路由
//显示用户管理
adminUsersRouter.get('/users', (req, res) => {
    
    res.render('./admin/users', { title: "后台管理系统-用户管理" });
   
})
adminUsersRouter.get('/users/edit', (req, res) => {

    res.render('./admin/profile', { title: "后台管理系统-用户编辑" });

})
//显示用户编辑

// 4.导出
module.exports = adminUsersRouter;