var path = require('path');
var fs = require('fs');
var faker = require('faker');
//console.log(__dirname);
//console.log(path.dirname('src/resources/market.jpeg'))
fs.mkdir('target', { recursive: true }, function (err) {
    if (err)
        throw err;
});
