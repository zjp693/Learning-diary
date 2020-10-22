module.exports.showUser = (req, res) => {
    console.log(req.session);

    // res.send('文章')
    res.render('user', {
        username: req.session.username
    });
}
module.exports.editUser = (req, res) => {
    // res.send('文章管理管理')
    res.render('user-edit');
}