const { inserthero } = require('../models/addModes');

// #region 显示添加英雄页面
module.exports.hero = (req, res) => {
    // console.log(req.body);
    res.render('add', { title: "英雄管理系统-添加" });
}
//#endregion


// 添加英雄信息
module.exports.heroAdd = (req, res) => {

    let userData = {
        hname: req.body.name,
        nickname: req.body.nickname,
        skill: req.body.skill,
    }

    console.log(userData);

    inserthero(userData, function (results) {
        console.log(results);
        if (results.affectedRows == 1) {
            res.send({
                code: 200,
                message: "用户添加成功"
            })
        }
    })

}


