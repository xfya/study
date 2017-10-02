var connection = require('./baseDb.js');



module.exports = {
    getAllUsers(callback) {
        connection.query('select * from users where isdel=0', (err, results) => {
            if (err) return callback(err);
            callback(null, results)

        })
    },
    addUser(user, callback) {
        connection.query('insert into users set ?', [user], (err, results) => {
            if (err) return callback(err);
            callback(null, results)

        })
    },
    getInfo(id, callback) {
        connection.query('select * from users where id=?', [id], (err, results) => {
            if (err) throw err;
            callback(null, results[0])


        })
    },
    editInfo(id, callback) {

    },
    edituserInfo(user, callback) {
        connection.query('update users set ? where id = ? ', [user, user.id], (err, result) => {
            if (err) return callback(err)

            callback(null, result)
        })
    },
    deleteUserInfo(id, callback) {
        connection.query('update users set isdel=1 where id=?', [id], (err, result) => {
            if (err) return callback(err)
            callback(null, result)
        })
    }
}