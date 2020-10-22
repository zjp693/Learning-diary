
// 引入模型
const { Username } = require('../models/loginModels');
// 1.显示登录页面
module.exports.adminlogin = (req, res) => {
    res.render('login', { title: "英雄管理系统-登陆" });
}
//登陆
module.exports.loginUser = (req, res) => {
    // 1.获取前端传来的数据
    let { username, password } = req.body;
    // 3.数据库的数据比对
    Username(username, function (results) {

        // 1.判断邮箱书写是否正确(只要results的长度为0则说明邮箱写的不对)
        if (results.length !== 0) { // 邮箱存在
            // 2.判断通过邮箱查询的用户信息中 密码是否和前端传过来的密码一致(如果一致代表登录成功)
            if (results[0].password == password) { // 密码匹配

                // 把用户信息保存在session中，为了进行权限管理
                req.session.user = results[0];
                // console.log(req.session.user.email);
                return res.send({
                    code: 200,
                    message: "登录成功"
                })
            } else { // 密码不匹配
                return res.send({
                    code: 400,
                    message: "用户名或密码错误！"
                })
            }

        } else { // 用户不存在
            return res.send({
                code: 400,
                message: "用户名或密码错误！"
            })
        }

    })

    // res.send("登录成功"); //  Cannot set headers after they are sent to the client 写了多次res.send()
}