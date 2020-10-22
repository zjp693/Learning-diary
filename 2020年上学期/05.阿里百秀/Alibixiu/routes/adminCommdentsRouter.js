// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const adminCommdentsRouter = express.Router();
//引入控制器代码
// let { 控制器的导出的接口} = require('控制器的路径');
// 3.创建路由
//评论
adminCommdentsRouter.get('/comments', (req, res) => {
    
    res.render('./admin/comments', { title: "后台管理系统-评论" });
   
})
// 4.导出
module.exports = adminCommdentsRouter; 