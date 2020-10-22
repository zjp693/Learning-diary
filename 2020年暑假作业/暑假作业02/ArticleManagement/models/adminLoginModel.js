// 引入数据库的连接池
const pool = require('../config/dbconfig');
module.exports.findUser = (username, callback) => {
   pool.query(`select * from user where username ='${username}'`, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}