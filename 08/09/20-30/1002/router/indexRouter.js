var express = require('express');

var router = express.Router();
var indexCtrl = require('../controller/indexCtrl.js');

router.get('/', indexCtrl.getIndexPage);
router.post('/addUser', indexCtrl.addUser)
    .get('/info', indexCtrl.getInfo)
    .get('/edit', indexCtrl.editInfo)
    .post('/edit', indexCtrl.edituserInfo)
    .get('/del', indexCtrl.deleteUserInfo)

module.exports = router