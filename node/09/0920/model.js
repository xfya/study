var fs = require('fs')
var path = require('path')
var template = require('art-template');

function getAll(callback) {
    // 异步方法中，如果想往外 返回数据，只能使用 callback 回调函数
    fs.readFile(path.join(__dirname, './data.json'), 'utf-8', (err, dataStr) => {
        // 当方法内部发生错误的时候，直接调用 callback 将错误对象传递给用户，让用户去决定如何处理这个错误！
        // 当报错之后，我们要切断后续代码的执行，所以在调用 callback(err) 完毕后，需要退出当前代码
        if (err) return callback(err);
        var heros = JSON.parse(dataStr);
        callback(null, heros);
    });
}



function writeAll(heros, callback) {
    fs.writeFile(path.join(__dirname, './data.json'), JSON.stringify(heros, null, '  '), (err) => {
        if (err) return callback(err);
        // 返回true表示文件写入成功！
        callback(null, true);
        // 异步方法中无法通过 return 直接返回数据，所以 需要让调用者传递一个 callback 回调函数操作数据
    });
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
            writeAll(heros, callback)


        })


    },
    deleteHeroById(id, callback) {
        id = parseInt(id);
        console.log(id, 'id---')
        getAll((err, heros) => {
            heros.some((item, i) => {
                if (item.id == id) {
                    console.log(heros)
                    heros.splice(i, 1)
                    return true;
                }
            })
            writeAll(heros, callback)
        })

    },
    updateHero(hero, callback) {
        hero.id = parseInt(hero.id);
        getAll((err, heros) => {
            if (err) return callback(err);

            // heros.some((item, i) => {
            heros.some((item, i) => {
                if (item.id === hero.id) {
                    heros.splice(i, 1, hero)
                    return true;
                }
            })

            writeAll(heros, callback)
        })


    }
}