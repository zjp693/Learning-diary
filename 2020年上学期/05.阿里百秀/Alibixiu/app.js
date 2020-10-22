//1.导入模块
const express = require('express');
const path = require('path')
// 导入ejs包



var ejs = require("ejs");
//1.2导入路由
// 导入用户系统首页路由
const index = require('./routes/indexRouter');
// 导入用户系统列表路由
const list = require('./routes/listRoutesr');
// 导入用户系统详情路由
const detail = require('./routes/detailRouter');
// const ejs = require('ejs');
// 导入后台系统登录路由
const adminLogin = require('./routes/adminLoginRouter');
// 导入后台系统首页路由
const adminIndex = require('./routes/adminIndexRouter');
// 导入后台系统文章路由
const adminPosts = require('./routes/adminPostsRouter');
//  导入后台系统评论路由
const adminComments = require('./routes/adminCommdentsRouter');
//  导入后台系统用户路由
const adminUsers = require('./routes/adminUsersRouter');
//  导入后台系统设置路由
const adminSettings = require('./routes/adminSettingsRouter');
// 引入session 包
const session = require('express-session');
//2 设置包
//2.1创建服务器
let app = express();
//2.2.静态网页托管
app.use(express.static(path.join(__dirname, 'public')))
// 2.3定义模板引擎

app.set("views", path.join(__dirname, 'views'));

// app.engine('html', ejs.__express)
app.engine('.html', require('ejs').__express);

app.set('view engine', 'html')

// app.engine('html', require('ejs').renderFile);
// 2.4配置中间件
app.use(express.urlencoded({ extended: false }))
//2.5配置session包
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge:60000*10
    }
}))

// 2.6 路由拦截(登录页面就让访问 如果req.session.user 也让访问)
app.use(function (req, res, next) {
    // 获取url
    let url = req.originalUrl;
    // 判断 是不是登录页 和是否没有req.session.user 就让页面跳转到登录页
    if (url != '/admin/login' && !req.session.user) {
        // 重定向到登录页
        return res.redirect("/admin/login");
    }
    next();
})

// 3.处理请求 返回响应
//挂载路由
//  挂载首页路由
app.use(index);

//  挂载列表路由
app.use(list);
//  挂载详情路由
app.use(detail);
//  挂载登录路由
app.use('/admin', adminLogin);
//  挂载首页路由
app.use('/admin', adminIndex);
//  挂载文章路由
app.use('/admin', adminPosts);
//  挂载评论路由
app.use('/admin', adminComments);
//  挂载用户路由
app.use('/admin', adminUsers);
//  挂载设置路由
app.use('/admin', adminSettings);
//4.监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，请访问：http://localhost:3000/');
});