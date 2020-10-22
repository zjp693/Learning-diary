const { findhero, updateOne } = require('../models/listModels');

module.exports.edit = (req, res) => {
    let { id } = req.params;

    findhero(id, function (results) {
        console.log(results);
        res.render('edit', { title: { title: "英雄管理系统-修改" }, hero: results[0] });
    })
}

// 更新英雄信息
// module.exports.heroedit = (req, res) => {
//     // console.log(req.body);
//     let userData = {
//         hname: req.body.hname,
//         nickname: req.body.nickname,
//         skill: req.body.skill,
//         id: req.body.id
//     }
//     // console.log(userData);
//     // res.send('ok拉')
//     console.log('成功了兄弟');
//     console.log(req.params);
//     console.log(req.body);
//     updatehero(userData, function (results) {
//         // console.log(results);
//         if (results.affectedRows == 1) {
//             res.send({
//                 code: 200,
//                 message: "用户添加成功"
//             })
//         }
//     })
// }


module.exports.heroedit = (req, res) => {
    // 结构化数据
    console.log(req.body);
    let { name, nickname, skill, id } = req.body;
    // 更新数据
    updateOne({
        name,
        nickname,
        skill,
        id,
        callback(results) {
            if (results.affectedRows !== 0) {
                return res.send({
                    code: 200,
                    message: "数据更新成功"
                })
            }
            return res.send({
                code: 500,
                message: "数据更新失败"
            })
        }
    })
}