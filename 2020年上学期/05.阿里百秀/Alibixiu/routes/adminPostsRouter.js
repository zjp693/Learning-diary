// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const adminPostsRouter = express.Router();
//引入控制器代码
// let { 控制器的导出的接口} = require('控制器的路径');
// 3.创建路由
// 文章
adminPostsRouter.get('/posts', (req, res) => {
    // res.send('后台管理系统首页')
    res.render('./admin/posts', { title: "后台管理系统-文章" });
    // res.send("首页")
})

//文章添加
adminPostsRouter.get('/posts/add', (req, res) => {

    res.render('./admin/post-add', { title: "后台管理系统-文章添加" });
   
})
// 4.导出
module.exports = adminPostsRouter;