module.exports = {
    showIndexPage(req, res) {
        console.log(req.session, '---------------')
        res.render('index', {
            isLogin: req.session.isLogin,
            user: req.session.user
        })
    }
}