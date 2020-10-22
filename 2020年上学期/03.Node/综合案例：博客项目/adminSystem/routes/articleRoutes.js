// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const ArticleRouter = express.Router();
//引入控制器代码
let { showarticle, editArticle } = require('../controller/articleCtrl');
// 3.创建路由
ArticleRouter.get('/', showarticle)

ArticleRouter.get('/edit', editArticle)
// 4.导出
module.exports = ArticleRouter;