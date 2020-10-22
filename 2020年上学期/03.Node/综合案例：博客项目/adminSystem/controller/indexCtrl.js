let User = require('../model/dbuser')
const e = require('express')
// console.log(1);

module.exports.show = (req, res) => {
    // res.send('后台管理系统首页')
    // res.render('login');
    console.log(req.session);

    // 判断一下 req.session.username
    if (!req.session.username) {
        // 如果没有 那么跳转到登录页面
        res.render('login');

    } else {
        // 如果有 那么跳转到用户列表页面 当我们访问路由 localhost:3000/的时候 我想让页面跳到别的页面 这叫重定向 redirect(地址)
        res.redirect('/user');
    }
}
module.exports.login = async (req, res) => {
    // console.log(req.body);
    let { email, password } = req.body
    // console.log(2);
    // console.log(email, password);
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).send({
            code: 400,
            msg: "邮箱或密码错误"
        })
    }
    let user = await User.findOne({ email: email })
    // console.log(user);
    if (user) {
        let isValid = (password === user.password)

        if (isValid) {
            req.session.username = user.username
            req.session.email = user.email
            res.status(200).send({
                code: 200,
                msg: '登陆成功'
            })
        } else {
            return res.status(400).send({
                code: 400,
                msg: "邮箱或密码错误"
            })
        }
    } else {
        return res.status(400).send({
            code: 400,
            msg: "邮箱或密码错误"
        })
    }
}

module.exports.loginout = (req, res) => {
    req.session.destroy(function (err) {
        // cannot access session here
        res.clearCookie('connect.sid')
        res.status(200).send({
            code: 200,
            msg: '用户退出成功'
        })
    })


}