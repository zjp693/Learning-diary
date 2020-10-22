// 引入数据库的连接池
const pool = require('../config/dbconfig');
// 通过用户提供的用户名来查询数据
module.exports.findUser = (username,callback) => {
  pool.query(`select * from users where username ='${username}'`, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}