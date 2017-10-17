var express = require('express');
var router = express.Router();

var userCtrl = require('../controller/userCtrl.js')
router
    .get('/register', userCtrl.getRegisterPage)
    .get('/login', userCtrl.getLoginIn)
    .post('/register', userCtrl.registerNewUser)
    .post('/login', userCtrl.login)

module.exports = router