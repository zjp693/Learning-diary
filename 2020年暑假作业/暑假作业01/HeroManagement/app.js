// 1.导入包
// 1.1 导入express框架
const express = require('express');
// 1.2 导入path模块
const path = require('path');
// // 1.3 导入用户系统首页路由
const index = require('./routes/indexRoutes');
// // 1.4 导入用户系统列表路由
const add = require('./routes/addRoutes');
// // 1.5 导入用户系统详情路由
const edit = require('./routes/editRoutes');
// 1.6 导入ejs包

const ejs = require('ejs');
// // 1.7 导入后台系统登录路由
const adminLogin = require('./routes/loginRoutes');
// // 1.8 导入后台系统首页路由
const adminadd = require('./routes/addRoutes');

var bodyParser = require('body-parser')

// 1.13 引入session包
const session = require('express-session');
// 2.设置包
// 2.1 创建服务器
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 2.2 配置静态资源
app.use(express.static(path.join(__dirname, 'public')));
// 2.3 把views设置为模板文件的根目录

app.set('views', path.join(__dirname, 'views'));// 设置静态文件目录

app.engine('.html', require('ejs').__express); //设置ejs渲染html

app.set('view engine', 'html');//设置html为模板引擎 注意这里是html

// 2.6 配置urlencoded
app.use(express.urlencoded({ extended: false }));
// 2.7 配置session包
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 600000 * 100
    }
}))
// 2.8 路由拦截(登录页面就让访问 如果req.session.user 也让访问)
app.use(function (req, res, next) {
    // 获取url
    let url = req.originalUrl;
    // 判断 是不是登录页 和是否没有req.session.user 就让页面跳转到登录页
    if (url != '/login' && !req.session.user) {
        // 重定向到登录页   
        return res.redirect("/login");
    }
    next();
})


// 3.挂载路由
// // 3.1 挂载首页路由
app.use(index);
// // 3.2 挂添加路由
app.use(add);
// // 3.3 挂载修改路由
app.use('/edit', edit);
// // 3.4 挂载登录路由
app.use('/login', adminLogin);
// // 3.5 挂载首页路由
app.use('/add', adminadd);

// 4.指定端口并启动服务
app.listen(3001, () => {
    console.log("请打开: http://localhost:3001");
})