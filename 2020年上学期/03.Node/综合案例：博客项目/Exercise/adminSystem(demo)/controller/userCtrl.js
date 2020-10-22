module.exports.showUser = (req, res) => {
    // res.send('文章')
    res.render('user');
}
module.exports.editUser = (req, res) => {
    // res.send('文章管理管理')
    res.render('user-edit');
}