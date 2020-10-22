// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminPostsRouter = express.Router();
// 3.引入控制器方法
const { postsPage, postsAddPage, postsEditPage, postsByFilter, postsByPaging, insertPost, deletePost, updatePost } = require('../controllers/adminPostsCtrl');
// 4.创建具体路由
// 4.1显示后台管理文章页面
adminPostsRouter.get('/posts', postsPage)

// 4.2显示后台管理写文章页面
adminPostsRouter.get('/posts/add', postsAddPage)

// 4.3显示后台管理文章编辑页面
adminPostsRouter.get('/posts/edit/:id', postsEditPage)

// 4.4显示文章列表和分页
adminPostsRouter.get('/posts/findsByFilter', postsByFilter)

// 4.5分页显示文章
adminPostsRouter.get('/posts/findByPaging', postsByPaging)

// 4.6添加文章
adminPostsRouter.post('/posts/addOne', insertPost)

// 4.7删除文章
adminPostsRouter.delete('/posts/delete', deletePost)

// 4.8更新文章
adminPostsRouter.put('/posts/updateOne', updatePost)

// 5.导出路由
module.exports = adminPostsRouter;