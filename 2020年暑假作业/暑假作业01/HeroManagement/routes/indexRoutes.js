// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const indexRouter = express.Router();
// 3.引入控制器方法
const { adminlist, lists, Delete, indexSearch } = require('../controllers/listCtrl');
// 4.创建具体路由
indexRouter.get('/', adminlist);
// 
indexRouter.get('/list', lists);

indexRouter.put('/delete', Delete);

indexRouter.get("/search", indexSearch);
// 5.导出路由
module.exports = indexRouter;