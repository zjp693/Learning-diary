module.exports.showarticle = (req, res) => {
    // res.send('文章')
    res.render('article')
}
module.exports.editArticle = (req, res) => {
    // res.send('文章管理管理')
    res.render('article-edit');
}