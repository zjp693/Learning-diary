// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const addRouter = express.Router();
// 3.引入控制器方法
const { hero, heroAdd } = require('../controllers/addctrl');
 
// 4.创建具体路由
addRouter.get('/', hero)


addRouter.post('/add', heroAdd)
// 5.导出路由
module.exports = addRouter;