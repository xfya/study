var UserModel = require('../model/userModel')


module.exports = {
    getRegisterPage(req, res) {
        res.render('./user/register')
    },
    getLoginIn(req, res) {
        res.render('./user/login')
    },
    registerNewUser(req, res) {
        // 注册新用户
        var newUser = req.body;
        console.log(newUser)
        UserModel.sync()
            .then(() => {
                // UserModel.create();
                // 在注册之前先通过username 这个用户名查找是否注册
                UserModel
                    .count({
                        username: newUser.username
                    })

            })
            .then(result => {
                console.log(result)
            })
    }
}