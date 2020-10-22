
//1.引入mongoose'框架
const mongoose = require('mongoose')
//2.连接数据库
mongoose.connect('mongodb://localhost/zjp_blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('数据库连接成功') })
    .catch((err) => { console.log('数据库连接失败') });
