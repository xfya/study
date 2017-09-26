var fs = require('fs')
var path = require('path')
var template = require('art-template');

function getAll(callback) {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf-8', (err, data) => {
        // console.log(data)
        if (err) return callback(err);
        var list = JSON.parse(data);
        callback(null, list)
            // 异步方法中如果想往外传递数据只能使用回调含山
            // res.render('index', { list: list })
    })
}



module.exports = {
    // 把增删改查的数据封装起来
    getAllHero(callback) {
        getAll(callback)

    },
    getHeroById(id, callback) {
        // 获取所有的英雄数据  拿到数组后比较和用户传的id 是否相同
        getAll((err, heros) => {
            if (err) return callback(err);
            heros.some(heros => {
                if (heros.id == parseInt(id)) {
                    callback(null, heros);
                    return true;
                }
            })


        })


    },
    deleteHeroById() {}
}