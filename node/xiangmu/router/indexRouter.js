var express = require('express');
var indexCtrl = require('../controller/indexCtrl.js')
var router = express.Router();

router.get('/', indexCtrl.showIndexPage)


module.exports = router;