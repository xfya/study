var Sequelize = require('sequelize');


var connection = new Sequelize('xfablog', 'root', 'root', {
    host: '127.0.0.1',
    dialect: "mysql"
});

module.exports = connection;