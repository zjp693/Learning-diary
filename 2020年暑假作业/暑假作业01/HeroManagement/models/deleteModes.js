// 引入数据库连接池
const pool = require('../config/dbconfig');

//#region 3.删除用户
module.exports.deleteUser = (id, callback) => {
    let sql = 'DELETE FROM hero WHERE id =' + id;
    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    });
}
//#endregion