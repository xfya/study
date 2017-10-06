var express = require('express');
var indexCtrl = require('../controller/indexCtrl.js')
var router = express.Router();

router.get('/', (req, res) => {
    indexCtrl.showIndexPage(req, res)
})


module.exports = router;