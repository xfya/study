var template = require('art-template');
var path = require('path');

module.exports = function(res) {
    res.render = function(filename, dataObj) {

            var html = template(path.join(__dirname, 'views/' + filename + '.html'), dataObj)
                // res.end(html)

            this.end(html)
                // res.json(html)
        },
        res.json = function(dataObj) {
            this.end(JSON.stringify(dataObj))
        }
}