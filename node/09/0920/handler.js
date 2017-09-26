var template = require('art-template');
var fs = require('fs');
var path = require('path');
var modelList = require('./model.js')
var formidable = require('formidable')
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
    },
    showHeroInfo(req, res) {
        var id = req.query.id;
        modelList.getHeroById(id, (err, hero) => {
            if (err) throw err;
            res.render('info', hero)
        })
    },
    ajaxPostFile(req, res) {
        // 如何获取文件的数据

        // 每当客户端向服务器传送数据的时候都会触发 data 时间
        // var data = '';
        // var count = 0;
        // req.on('data', (chunk) => {
        //     data += chunk;
        //     count++
        // })

        // req.on('end', () => {
        //     console.log(data)
        //     console.log(count)

        //     fs.writeFile(path.join(__dirname, '/img/test.jpg'), data, 'binary', (err) => {
        //         if (err) throw err;
        //         console.log("图片保存成功")
        //     })
        // })
        var form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, '/img/')
        form.keepExtensions = true;
        form.parse(req, function(err, fields, files) {
            console.log(files)
                // result.avatar.path = files.path;
            var rel = path.relative(__dirname, files.avatar.path)
        });



    }
}