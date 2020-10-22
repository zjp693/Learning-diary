// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const nodeRouter = express.Router();
// 3.引入控制器方法
const { nodeIndexPage, nodeAddPage, addOneNode, deleteOneNode, findByfilter, nodeeditPage, updateOneNode } = require('../controllers/nodeCtrl')
// 4.创建具体路由
// 4.1显示机构管理首页
nodeRouter.get('/', nodeIndexPage)
// 4.2显示机构管理添加页面
nodeRouter.get('/add', nodeAddPage)
// 4.3添加机构
nodeRouter.post('/addOne', addOneNode)
// 4.4删除机构
nodeRouter.delete('/deleteOne', deleteOneNode)
// 4.5模糊查询
nodeRouter.get('/findByFilter', findByfilter)
// 4.6显示机构管理编辑页面
nodeRouter.get('/edit/:id', nodeeditPage)
// 4.7更新机构
nodeRouter.put('/editOne', updateOneNode)
// 5.导出路由
module.exports = nodeRouter;