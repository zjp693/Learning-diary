// 引入joi
const Joi = require('joi');
// 引入模型中的方法
const { findUser } = require('../models/loginModel');
// 显示登录页面
module.exports.loginPage = (req, res) => {
  res.render('login');
}
// 处理登录业务
module.exports.loginUser = (req, res) => {
  // console.log(req.body);
  let { username, password } = req.body;
  // 后端数据校验
  const schema = Joi.object().keys({
    username: Joi.string().min(3).max(11).required().error(new Error('用户名或密码不正确')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{5,8}$/).required().error(new Error('用户名或密码不正确'))
  })
  let result = Joi.validate({ username: username, password: password }, schema);
  if (result.error) {
    res.send({
      code: 500,
      message: result.error.message
    })
    // 抛出错误
    throw result.error;
  }
  // 数据比对
  findUser(username, function (results) {
    // console.log(results);
    if (results.length !== 0) { //用户名存在
      if (results[0].password == password) { //密码匹配
        // 把用户信息保存在session中，为了进行权限管理
        req.session.user = results[0];
        res.send({
          code: 200,
          message: "登录成功"
        })
      } else { //密码不匹配
        res.send({
          code: 500,
          message: "用户名或密码不正确"
        })
      }
    } else { //用户名不存在
      res.send({
        code: 500,
        message: "用户名或密码不正确"
      })
    }
  })
}