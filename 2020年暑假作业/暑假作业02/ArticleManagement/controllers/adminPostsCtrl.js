// 引入模型中的方法
const { findByPaging, findUserAndCategory, insertOnePost, deleteOnePost, findOnePost, updateOnePost } = require('../models/adminPostsModel');
// 引入日期格式化包
const moment = require('moment');
// 显示后台管理文章页面
module.exports.postsPage = (req, res) => {
  res.render('./admin/posts');
}
// 显示文章列表和分页
module.exports.postsByFilter = (req, res) => {
  // console.log(req.query);
  let { pagenum, pagesize, cid, state } = req.query;
  findByPaging({
    offset: (pagenum - 1) * pagesize,
    // 注意pagesize为字符串 要转数字(隐式转换)
    size: +pagesize,
    cid: +cid,
    state: state,
    callback(results) {
      // console.log(results);
      // 格式化日期
      for (let i = 0; i < results[1].length; i++) {
        results[1][i].publish_time = moment(results[1][i].publish_time).format("YYYY-MM-DD");
      }
      res.send({
        code: 200,
        message: "查询数据成功",
        // 分页数据
        pagenum: parseInt(pagenum),
        pagecount: Math.ceil(parseInt(results[0][0].total) / pagesize),
        // 文章数据
        data: results[1]
      });
    }
  })
}
// 分页显示文章
module.exports.postsByPaging = (req, res) => {
  // console.log(req.query);
  let { pagenum, pagesize } = req.query;
  let offset = (pagenum - 1) * pagesize;
  // 注意pagesize为字符串 要转数字(隐式转换)
  let size = +pagesize;
  // console.log(offset,size);
  findByPaging({
    offset,
    size,
    callback(results) {
      // console.log(results);
      // console.log(results[0][0].total);
      // 格式化日期
      for (let i = 0; i < results[1].length; i++) {
        results[1][i].publish_time = moment(results[1][i].publish_time).format("YYYY-MM-DD");
      }
      res.send({
        code: 200,
        message: "数据查询成功",
        // 注意pagenum为字符串 要转数字
        pagenum: parseInt(pagenum),
        pagecount: Math.ceil(parseInt(results[0][0].total) / pagesize),
        data: results[1]
      })
    }
  })
}

// 显示后台管理写文章页面(包含渲染作者和分类)
module.exports.postsAddPage = (req, res) => {
  findUserAndCategory(function (results) {
    // console.log(results);
    res.render('./admin/post-add', {
      user: results[0],
      category: results[1]
    });
  })

}

// 添加文章
module.exports.insertPost = (req, res) => {
  // console.log(req.body);
  let postData = {
    ptitle: req.body.ptitle,
    pname: req.body.pname,
    publish_time: req.body.publish_time,
    state: req.body.state,
    uid: req.body.uid,
    cid: req.body.cid
  };
  insertOnePost(postData, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "文章添加成功"
      })
    }
  })
}

// 删除文章
module.exports.deletePost = (req, res) => {
  // console.log(req.body);
  let { id } = req.body;
  deleteOnePost(id, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "文章删除成功"
      })
    }
  })
}

// 显示后台管理文章编辑页面
module.exports.postsEditPage = (req, res) => {
  // console.log(req.params);
  let { id } = req.params;
  findOnePost(id, function (results) {
    // console.log(results);
    // 格式化日期
    results[0][0].publish_time = moment(results[0][0].publish_time).format("YYYY-MM-DD");
    res.render('./admin/post-edit', {
      data: results[0],
      category: results[1],
      user: results[2],
      state: results[3]
    });
  })
}

// 更新文章
module.exports.updatePost = (req, res) => {
  // console.log(req.body);
  let newPostData = {
    pid: req.body.pid,
    ptitle: req.body.ptitle,
    pname: req.body.pname,
    publish_time: req.body.publish_time,
    state: req.body.state,
    uid: req.body.uid,
    cid: req.body.cid
  }
  updateOnePost(newPostData, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "文章更新成功"
      })
    }
  })
}