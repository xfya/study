var userModel = require('../model/usermodel.js')


module.exports = {
    getIndexPage(req, res) {
        userModel.getAllUsers((err, list) => {
            res.render('index', { users: list })
        })

    },
    addUser(req, res) {

        var user = req.body;

        userModel.addUser(user, (err, result) => {
            if (err) throw err;
            userModel.getAllUsers((err, list) => {
                res.json({
                    err_code: 0,
                    user: list
                })
            })

        })
    },
    getInfo(req, res) {
        var id = req.query.id
        userModel.getInfo(id, (err, user) => {
            if (err) throw err;
            res.render('info', user)
        })
    },
    editInfo(req, res) {
        var id = req.query.id
        userModel.getInfo(id, (err, user) => {
            if (err) throw err;
            res.render('edit', user)
        })
    },
    edituserInfo(req, res) {
        var id = req.query.id;
        var newUser = req.body;
        userModel.edituserInfo(newUser, (err, result) => {
            if (err) throw err;
            res.json({
                err_code: 0

            })
        })
    },
    deleteUserInfo(req, res) {
        var id = req.query.id;
        userModel.deleteUserInfo(id, (err, result) => {
            userModel.getAllUsers((err, list) => {
                res.json({
                    err_code: 0,
                    user: list
                })
            })
        })
    }
}