module.exports = {
    getRegisterPage(req, res) {
        res.render('./user/register')
    },
    getLoginIn(req, res) {
        res.render('./user/login')
    }
}