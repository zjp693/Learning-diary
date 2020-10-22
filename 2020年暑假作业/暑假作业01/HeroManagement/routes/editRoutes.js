// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const editRouter = express.Router();
// 3.引入控制器方法
const { edit, heroedit } = require('../controllers/editCtrl');
// 4.创建具体路由
//显示编辑页面
editRouter.get('/:id', edit)

// 修改英雄信息
editRouter.put('/edit', heroedit);
// 5.导出路由
module.exports = editRouter;