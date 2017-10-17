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
        // console.log(newUser)
        UserModel.sync()
            .then(() => {
                // UserModel.create();
                // 在注册之前先通过username 这个用户名查找是否注册
                return UserModel.count({
                    where: {
                        username: newUser.username
                    }
                })

            })
            .then((count) => {
                // console.log(count)
                if (count === 0) {
                    return UserModel.create(newUser)
                }
                return null;
            })
            .then(result => {
                // console.log('___---------------')
                // console.log(result)
                if (result === null) {
                    res.json({
                        err_code: 1,
                        msg: '此用户已被注册，请更改用户名'
                    })
                } else {
                    res.json({
                        err_code: 0,
                        msg: '注册成功'
                    })
                }
            })
    },
    login(req, res) {
        var loginUser = req.body;
        // console.log(loginUser)
        // 根据表单post  提交过来的数据去数据库中查找是否存在数据苦衷
        UserModel.sync()
            .then(() => { // 第一个 then 的作用是根据指定的用户名和密码，查找对应的用户数据
                return UserModel.findOne({ // findOne表示查找第一个匹配的数据
                    where: {
                        username: loginUser.username,
                        password: loginUser.password
                    }
                });
            })
            .then((result) => {
                // console.log(result)
                if (result === null) {
                    res.json({ // 登录失败
                        err_code: 1,
                        msg: '用户名或密码错误！'
                    });
                } else { // 登录成功、
                    // console.log(req.session);
                    // 将登录成功的状态保存到了 req.session 上
                    req.session.islogin = true;
                    // 将当前登录人的信息对象，保存到 req.session 上
                    req.session.user = result;

                    // console.log(req.session);
                    // 返回给客户端的登录消息
                    res.json({
                        err_code: 0
                    });
                }
            })


    }
}