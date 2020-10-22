let User = require('../model/dbuser')
const e = require('express')
// console.log(1);
module.exports.show = (req, res) => {
    // res.send('后台管理系统首页')
    res.render('login');
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