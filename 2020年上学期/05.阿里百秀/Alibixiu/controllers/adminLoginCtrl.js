const Joi = require('joi');

const { findUser } = require('../models/adminLoginMode')
//1.登陆显示页面
module.exports.loginPage = (req, res) => {
    // res.send('后台管理系统首页')
    // res.render('./admin/login', { title: "后台管理系统-登陆" });
    res.render('./admin/login', { title: "后台管理系统-登陆" });
    // res.send("首页")
}


//2.处理登陆业务

module.exports.loginUser = (req, res) => {
    //1.获取前端传来的数据
    let { email, password } = req.body
    //2.后端数据校验
    const schema = {

        email: Joi.string().min(6).max(100).email().required().error(new Error('邮箱或密码错误')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('邮箱或密码错误'))

    }
    const result = Joi.validate({ email: email, password: password }, schema);
    if (result.error) {
        res.send({
            code: 500,
            message: result.error.message
        })
        //抛出错误
        throw result.error;
    }
    console.log(111);
    // return  res.send('yes')



    //3.数据库的数据对比
    findUser(email, function (result) {
        //1.判断邮箱是否正确
        if (result.length != 0) {//邮箱存在
            req.session.user = result[0];
            console.log(req.session);
            console.log(req.session.user.email);
            if (result[0].password == password) {//密码匹配
                console.log('no');
                return res.send({
                    code: 200,
                    message: '登陆成功'

                })
            } else {//邮箱匹配
                return res.send({
                    code: 500,
                    message: '邮箱或密码不正确'
                })

            }
        } else {//邮箱不存在
            return res.send({
                code: 500,
                message: "邮箱或密码错误"
            })

        }
        // 2.判断输入的密码是正确
    })
}


// 3.退出登陆
module.exports.logoutUser = (req, res) => {
    req.session.destroy(function (err) {
        res.clearCookie('connect.sid');
        res.send({
            code: 200,
            message: "退出成功"
        })
    })
}