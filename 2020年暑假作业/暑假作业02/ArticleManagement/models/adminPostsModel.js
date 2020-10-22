// 引入数据库的连接池
const pool = require('../config/dbconfig');
// 查询所有文章(包括筛选、分页)
module.exports.findByPaging = (option) => {
  let offset = option.offset || 0;
  let size = option.size || 3;
  // 分类
  let cid = option.cid || null;
  // 状态
  let state = option.state || null;
  let callback = option.callback || null;
  let csql = ` SELECT COUNT(*) AS total FROM posts `;
  let sql = `;SELECT p.*,u.username,c.cname FROM posts p
  JOIN USER u ON p.uid = u.uid
  JOIN category c ON p.cid = c.cid `;
  // 判断
  // 四种情况判断
  if (!state && cid) { //有分类 无状态
    csql += ` WHERE cid = ${cid} `;
    sql += ` WHERE p.cid = ${cid} `;
  } else if (state && !cid) { //有状态 无分类
    csql += ` WHERE state = '${state}' `;
    sql += ` WHERE p.state = '${state}' `;
  } else if (state && cid) { //有状态 有分类
    csql += ` WHERE cid = ${cid} AND state = '${state}' `;
    sql += ` WHERE p.cid = ${cid} AND p.state = '${state}' `
  }
  sql += ` LIMIT ${offset},${size}`
  csql += sql;
  // console.log(csql);
  pool.query(csql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}

// 查询作者和分类
module.exports.findUserAndCategory = (callback) => {
  pool.query(`SELECT uid,username FROM USER;
  SELECT * FROM category;`, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}

// 添加文章
module.exports.insertOnePost = (postObj, callback) => {
  let { ptitle, pname, publish_time, state, uid, cid } = postObj;
  pool.query('INSERT  INTO posts(`ptitle`,`pname`,`publish_time`,`state`,`uid`,`cid`) VALUES (?,?,?,?,?,?);', [ptitle, pname, publish_time, state, uid, cid], function (error, results) {
    if (error) throw error;
    callback(results);
  });
}

// 删除文章
module.exports.deleteOnePost = (id, callback) => {
  pool.query(`DELETE FROM posts WHERE pid = ${id};`, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}

// 回显文章信息
module.exports.findOnePost = (id, callback) => {
  pool.query(`SELECT * FROM posts WHERE pid = ${id};
  SELECT * FROM category;
  SELECT uid,username FROM user;
  SELECT DISTINCT state FROM posts;`, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}

// 更新文章
module.exports.updateOnePost = (newPostObj, callback) => {
  let { pid, ptitle, pname, publish_time, state, uid, cid } = newPostObj;
  pool.query(`UPDATE posts SET ptitle=?,pname=?,publish_time=?,state=?,uid=?,cid=? WHERE pid=?;`, [ptitle, pname, publish_time, state, uid, cid, pid], function (error, results) {
    if (error) throw error;
    callback(results);
  });
}