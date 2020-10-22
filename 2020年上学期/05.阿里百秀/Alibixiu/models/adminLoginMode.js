var  pool=require('../config/dbconfig')


// pool.query('SELECT * from users ', function (error, results, fields) {
//     if (error) throw error;
//    console.log(results);
// });
module.exports.findUser = (email, callback) => {
    pool.query(`select * from users where email='${email}'`, function (error, results) {
        if (error) throw error;

        callback(results)
    });
}