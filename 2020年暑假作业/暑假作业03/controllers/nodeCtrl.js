// 引入模型中的方法
const { findAllNode, insertOneNode, deleteOneNode, findByfilter, findOneNode, updateOneNode } = require('../models/nodeModel');
// 显示机构管理首页
module.exports.nodeIndexPage = (req, res) => {
  findAllNode(function (results) {
    // console.log(results);
    res.render('./Node/index', { data: results });
  })
}
// 显示机构管理添加页面
module.exports.nodeAddPage = (req, res) => {
  res.render('./Node/add');
}
// 添加机构
module.exports.addOneNode = (req, res) => {
  // console.log(req.body);
  let nodeData = {
    ins_number: req.body.ins_number,
    gname: req.body.gname,
    state: req.body.state
  };
  insertOneNode(nodeData, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "机构添加成功"
      })
    }
  })
}
// 删除机构
module.exports.deleteOneNode = (req, res) => {
  // console.log(req.body);
  let { id } = req.body;
  deleteOneNode(id, function (results) {
    // console.log(results)
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "机构删除成功"
      })
    }
  })
}
// 模糊查询
module.exports.findByfilter = (req, res) => {
  // console.log(req.query);
  let { gname, state } = req.query;
  findByfilter({
    gname: gname,
    state: +state,
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
// 显示机构管理编辑页面
module.exports.nodeeditPage = (req, res) => {
  // console.log(req.params);
  let { id } = req.params;
  findOneNode(id, function (results) {
    // console.log(results);
    res.render('./Node/edit', { data: results })
  })
}
// 更新机构
module.exports.updateOneNode = (req, res) => {
  // console.log(req.body);
  let newNodeData = {
    id: req.body.id,
    ins_number: req.body.ins_number,
    gname: req.body.gname,
    state: req.body.state
  };
  updateOneNode(newNodeData, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "数据更新成功"
      })
    }
  })
}