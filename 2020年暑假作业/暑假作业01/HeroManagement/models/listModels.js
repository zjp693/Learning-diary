// 引入数据库连接池
const pool = require('../config/dbconfig');

module.exports.list = (callback) => {
    let sql = 'SELECT id,hname,nickname,skill FROM hero;'

    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    });
}

//#region 0.查询用户信息
module.exports.findhero = (id, callback) => {
    let sql = 'SELECT * FROM hero WHERE id = ' + id;
    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    });
}

//#region 4.更新用户信息
// module.exports.updatehero = (userObj, callback) => {
//     console.log("========================");
//     console.log(userObj);
//     let { hname, nickname, skill, id  } = userObj;
//     console.log(userObj);
//     let sql = '';
//     // if (avatar == null) {
//     //     sql = "UPDATE users SET id=?,hname=?, nickname=?,skill=?";
//     //     pool.query(sql, [id, hname, nickname, skill], function (error, results) {
//     //         if (error) throw error;
//     //         callback(results);
//     //     });

//     // } else {
//     sql = "UPDATE hero SET hname=?, nickname=?,skill=?,id=?";
//         pool.query(sql, [id, hname, nickname, skill], function (error, results) {
//             if (error) throw error;
//             callback(results);
//         });
//     }


// }
//#endregion

module.exports.updateOne = (option) => {
    let name = option.name;
    let nickname = option.nickname;
    let skill = option.skill;
    let id = option.id;
    let callback = option.callback;

    let sql = `UPDATE hero SET hname = "${name}",nickname = "${nickname}",skill = "${skill}" WHERE id = ${id}`;

    // 执行sql
    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    })
}



// 模糊查询英雄信息
module.exports.findLike = (text, callback) => {
    let sql = `SELECT * FROM hero WHERE hname LIKE "%${text}%";`;
    // 执行sql
    pool.query(sql, function (error, results) {
        if (error) throw error;
        callback(results);
    })
}