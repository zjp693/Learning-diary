// 引入数据库连接池
const pool = require('../config/dbconfig');

//#region 2.添加用户信息
module.exports.inserthero = (userObj, callback) => {
    let { id, hname, nickname, skill } = userObj;
    let sql = 'INSERT INTO hero(id,hname,nickname,skill)VALUES (?,?,?,?)';


    pool.query(sql, [id, hname, nickname, skill], function (error, results) {
        if (error) throw error;
        callback(results);
    });
}
//#endregion