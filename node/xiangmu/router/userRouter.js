var express = require('express');
var router = express.Router();

var userCtrl = require('../controller/userCtrl.js')
router
    .get('/register', userCtrl.getRegisterPage)
    .get('/login', userCtrl.getLoginIn)


module.exports = router