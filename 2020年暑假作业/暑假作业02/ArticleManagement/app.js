// 1.引入包
// 1.1引入express框架
const express = require('express');
// 1.2引入path包
const path = require('path');
// 1.3引入用户系统首页路由
const adminLogin = require('./routes/adminLoginRouter');
// 1.4引入用户系统文章路由
const adminPosts = require('./routes/adminPostsRouter');
// 1.5引入express-session
const session = require('express-session');
// 1.6引入ejs
const ejs = require('ejs');

// 2.设置包
// 2.1创建服务器
const app = express();
// 2.2设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 把views设置为模板文件的根目录
app.set('views', path.join(__dirname, 'views'));
// 2.4 设置模板引擎为ejs
app.set('view engine', 'ejs');
// 2.5 配置urlencoded
app.use(express.urlencoded({ extended: false }));
// 2.6设置session包
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000 * 10
  }
}))
// 2.7 路由拦截(登录页面就让访问 如果req.session.user 也让访问)
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

// 3.挂载路由
app.use('/admin', adminLogin);
app.use('/admin', adminPosts);

// 4.监听端口 启动服务
app.listen(3000, () => {
  console.log("请访问：http://localhost:3000");
})