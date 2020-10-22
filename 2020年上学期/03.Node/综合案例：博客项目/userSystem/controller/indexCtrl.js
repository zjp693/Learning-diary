const Article = require('../models/article')
const pagination = require('mongoose-sex-page');
 

require('../models/user')

module.exports.getArticle = async (req, res) => {
    // Article.find().then(data => {
    //     // console.log(data);
    let pageNum = parseInt(req.query.pageNum)
    let pageSize = parseInt(req.query.pageSize)
    // console.log(req.query.pageSize);
    // console.log(pageSize);

    // console.log(req.query);

    let result = await pagination(Article).page(pageNum).size(pageSize).display(3).find().populate("author").exec();
    // page()代表当前页 size()代表每页显示数量  display()为要显示的页码数量  exec() 向数据库发出查询请求
    res.send({
        code: 200,
        msg: "数据添加成功",
        data: result
    })

}
// 获取文章详情
module.exports.getDetail = async (req, res) => {
    // console.log(req.query)

    let result = await Article.findOne({ _id: req.query.id }).populate("author");
    // console.log(result);

    res.send({
        code: 200,
        msg: "数据获取成功",
        data: result
    })
}