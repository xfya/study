var Sequelize = require('sequelize');
// 导入数据库连接对象

var Db = require('./baseDB.js');
// console.log(Db)
// 创建 users 用户表对象
var User = Db.define('users', {
    id: { // Id主键
        primaryKey: true, // 主键
        autoIncrement: true, // 自动增长,
        unique: true, // 值唯一
        allowNull: false, // 主键不允许为空
        type: Sequelize.INTEGER // 主键类型为 整数
    },
    username: { // 用户名
        allowNull: false,
        type: Sequelize.STRING
    },
    password: { // 登录密码
        allowNull: false,
        type: Sequelize.STRING
    },
    nickname: { // 用户昵称
        allowNull: false,
        type: Sequelize.STRING
    }
});

module.exports = User;