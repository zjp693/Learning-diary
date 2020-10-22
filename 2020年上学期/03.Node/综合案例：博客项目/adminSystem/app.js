//1.导入模块
const express = require('express');
const path = require('path')
const loginRoutes = require('./routes/indexRoutes')
const ArticleRoutes = require('./routes/articleRoutes')
const UserRoutes = require('./routes/userRoutes');
const session = require('express-session')
// const { use } = require('./routes/indexRoutes');
// const indexRouter = require('./routes/articleRoutes');
//2.创建服务器
let app = express();
//2.1.静态网页托管
app.use(express.static(path.join(__dirname, 'public')))


//2.2 用的模板引擎是art-template
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//2.3设置中间键
app.use(express.urlencoded({ extended: false }))
// 2.4连接数据库
require('./model/dbcommon')

//2.5
app.use(session({

    secret: 'keyboard cat',
    // resave: false,
    // saveUninitialized: true,
    cookie: { maxAge: 6000 * 10 }
}))
//3.处理请求 返回响应
app.use(loginRoutes)
app.use('/article', ArticleRoutes)
app.use('/user', UserRoutes)
//4.监听端口
app.listen(3000, () => {
    console.log('服务器启动成功，请访问：http://localhost:3000/');
});