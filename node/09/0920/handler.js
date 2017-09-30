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
            // console.log(files)
            // result.avatar.path = files.path;
            var rel = path.relative(__dirname, files.avatar.path)
                // console.log(rel)  处理路径得到一个绝对路径
            var resultPath = '/' + rel.replace('\\', '/');
            // console.log(resultPath)
            // 我们需要把左侧栏最终的图片url  访问地址   返回客户端了
            var result = {
                err_code: 0,
                path: resultPath
            }


            // res.end(JSON.stringify(result))

            res.json(result)
        });



    },
    geteditHero(req, res) {
        var id = req.query.id;
        modelList.getHeroById(id, (err, hero) => {
            if (err) throw err;
            res.render('edit', hero)
        })
    },
    updateHeroInfo(req, res) {
        // 接收post 提交过来的表单数据
        // 普通表单键值对 
        // 创建一个formidable  表单

        // var form = new formidable.IncomingForm();
        var form = new formidable.IncomingForm();
        // 设置上传的路径
        form.uploadDir = path.join(__dirname, '/img/');
        // 保留文件上传时候的后缀名
        form.keepExtensions = true;
        form.encoding = 'utf-8';
        // 通过form。parse  解析数据
        form.parse(req, (err, hero, files) => {
            if (files.avatar !== undefined) {
                var resultPath = '/' + path.relative(__dirname, files.avatar.path).replace('\\', '/');
                hero.avatar = resultPath;
            }
            modelList.updateHero(hero, (err, result) => {
                if (result) {
                    res.json({
                        err_code: 0
                    })
                }
            })

        })
    },
    deleteHeroById(req, res) {
        var id = req.query.id;
        // console.log(id)
        // 执行具体的删除逻辑代码
        modelList.deleteHeroById(id, (result) => {
            console.log(result, 'sdsds')

            var result = {
                    err_code: 0
                }
                // res.json(result)
            modelList.getAllHero((err, heros) => {
                res.json({ list: heros })
            })
        })

    }
}