// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const adminindexRouter = express.Router();
//引入控制器代码
// let { 控制器的导出的接口} = require('控制器的路径');
// 3.创建路由
adminindexRouter.get('/', (req, res) => {
    // res.send('后台管理系统首页')
    res.render('./admin/index',{title:"后台管理系统-首页"});
    // res.send("首页")
})
// 4.导出
module.exports = adminindexRouter;