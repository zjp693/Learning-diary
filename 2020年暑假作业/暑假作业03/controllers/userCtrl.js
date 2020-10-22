// 引入joi
const Joi = require('joi');
// 引入模型中的方法
const { findAllUser, findAllgname, insertOneUser, deleteOneUser, findByFilter } = require('../models/userModel');
// 显示用户管理首页
module.exports.userIndexPage = (req, res) => {
  findAllUser(function (results) {
    // console.log(results);
    res.render('./User/index', { data: results });
  })
}
// 显示用户添加页面
module.exports.userAddPage = (req, res) => {
  findAllgname(function (results) {
    // console.log(results);
    res.render('./User/add', { data: results });
  })
}
// 添加用户
module.exports.insertOneUser = (req, res) => {
  // console.log(req.body);
  let { username, password } = req.body;
  // 后端数据校验
  const schema = Joi.object().keys({
    username: Joi.string().min(3).max(11).required().error(new Error('用户名不能为空')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{5,8}$/).required().error(new Error('密码不能为空且密码在5~8位之间'))
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

  let userData = {
    username: req.body.username,
    password: req.body.password,
    gid: req.body.gid,
    state: req.body.state
  };
  insertOneUser(userData, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "用户添加成功"
      })
    }
  })
}
// 删除用户
module.exports.deleteOneUser = (req, res) => {
  // console.log(req.body);
  let { id } = req.body;
  deleteOneUser(id, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "用户删除成功"
      })
    }
  })
}
// 模糊查询
module.exports.findByFilter = (req, res) => {
  // console.log(req.query);
  let { username, gname } = req.query;
  findByFilter({
    username: username,
    gname: gname,
    callback(results) {
      // console.log(results);
      res.send({
        code: 200,
        message: "数据查询成功",
        data: results
      })
    }
  })
}