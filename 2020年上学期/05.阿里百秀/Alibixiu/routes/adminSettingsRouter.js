// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const adminSettingRouter = express.Router();
//引入控制器代码
// let { 控制器的导出的接口} = require('控制器的路径');
// 3.创建路由
adminSettingRouter.get('/settings', (req, res) => {
    // res.send('后台管理系统首页')
    res.render('./admin/settings', { title: "后台管理系统-网页设置" });
    // res.send("首页")
})
// 4.导出
module.exports = adminSettingRouter;