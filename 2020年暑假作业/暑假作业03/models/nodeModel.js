// 引入数据库连接池
const pool = require('../config/dbconfig');
// 查询所有机构
module.exports.findAllNode = (callback) => {
  pool.query(`SELECT * FROM institutions;`, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
// 添加机构
module.exports.insertOneNode = (nodeObj, callback) => {
  let { ins_number, gname, state } = nodeObj;
  pool.query(`INSERT  INTO institutions(ins_number,gname,state) VALUES (?,?,?);`, [ins_number, gname, state], function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 删除机构
module.exports.deleteOneNode = (id, callback) => {
  pool.query(`DELETE FROM institutions WHERE id = ${id};`, function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 模糊查询
module.exports.findByfilter = (option) => {
  let gname = option.gname || null;
  let state = option.state || null;
  let callback = option.callback || null;
  // 基础语句
  let sql = `SELECT * FROM institutions`;
  // 四种情况的判断
  if (gname && !state) {
    sql += ` WHERE gname LIKE('%${gname}%')`;
  } else if (!gname && state) {
    sql += ` WHERE state = ${state}`;
  } else if (gname && state) {
    sql += ` WHERE gname LIKE('%${gname}%') AND state = ${state}`;
  }
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 回显信息
module.exports.findOneNode = (id, callback) => {
  pool.query(`SELECT * FROM institutions WHERE id = ${id};`, function (error, results) {
    if (error) throw error;
    callback(results);
  })
}
// 更新机构信息
module.exports.updateOneNode = (newNodeObj, callback) => {
  let { id, ins_number, gname, state } = newNodeObj;
  pool.query(`UPDATE institutions SET ins_number=?,gname=?,state=? WHERE id = ?;`,[ins_number,gname,state,id], function (error, results) {
    if (error) throw error;
    callback(results);
  })
}