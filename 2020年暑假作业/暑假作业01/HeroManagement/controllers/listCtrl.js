// 引入模型
const { list, findLike } = require('../models/listModels');
const { deleteUser } = require('../models/deleteModes');
// 1.显示登录页面
module.exports.adminlist = (req, res) => {
    // res.send("首页");
    res.render('index', { title: "英雄管理系统-首页" });
}
// 
module.exports.lists = (req, res) => {
    list(function (results) {
        // console.log(results);
        // res.send('ok');
        res.send({
            code: 200,
            message: "用户信息获取成功",
            data: results
        })
    })
}


// 查询英雄信息
module.exports.indexSearch = (req, res) => {
    // 获取参数
    let text = req.query["text"];
    // 获取内容
    findLike(text, function (results) {
        if (Array.isArray(results) && results.length !== 0) {
            return res.send({
                code: 200,
                message: "数据获取成功!",
                data: results
            })
        }
        return res.send({
            code: 400,
            message: "没有相关的数据!"
        })
    })
}



//#region 5.删除用户
module.exports.Delete = (req, res) => {
    // console.log(req.body.id);
    // res.send('ok')
    let { id } = req.body;
    deleteUser(id, function (results) {
        if (results.affectedRows == 1)
            res.send({
                code: 200,
                message: "用户删除成功"
            })
    })

}
//#endregion