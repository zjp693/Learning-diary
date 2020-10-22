// 引入数据库连接池
const pool = require('../config/dbconfig');
// 查询所有用户
module.exports.findAllUser = (callback) => {
  pool.query(`SELECT u.id,u.username,ins.gname FROM users u,institutions ins WHERE u.gid = ins.id;`, function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 查询所有机构名称
module.exports.findAllgname = (callback) => {
  pool.query(`SELECT id,gname FROM institutions;`, function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 添加用户
module.exports.insertOneUser = (userObj, callback) => {
  let { username, password, gid, state } = userObj;
  pool.query(`INSERT  INTO users(username,password,state,gid) VALUES (?,?,?,?);`, [username, password, state, gid], function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 删除用户
module.exports.deleteOneUser = (id, callback) => {
  pool.query(`DELETE FROM users WHERE id = ${id}`, function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 模糊查询
module.exports.findByFilter = (option) => {
  let username = option.username || null;
  let gname = option.gname || null;
  let callback = option.callback || null;
  // 基础语句
  let sql = `SELECT u.id,u.username,ins.gname FROM users u INNER JOIN institutions ins ON u.gid = ins.id`;
  // 四种情况的判断
  if (username && !gname) {
    sql += ` WHERE username = '${username}'`;
  } else if (gname && !username) {
    sql += ` WHERE gname = '${gname}'`;
  } else if (username && gname) {
    sql += ` WHERE username = '${username}' AND gname = '${gname}'`;
  }
  // console.log(sql);
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  })
}