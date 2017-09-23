var template = require('art-template');
var fs = require('fs');
var path = require('path');
var modelList = require('./model.js')
module.exports = {
    getIndexPage(req, res) {
        // 获取所有的英雄信息
        // 根据英雄和页面将对应的数据渲染
        modelList.getAllHero((err, heros) => {
            res.render('index', { list: heros })
        })

    },
    getAdd(req, res) {
        res.render('add', {})
    }
}