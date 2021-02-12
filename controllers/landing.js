const path = require('path');

exports.get_landing = function(req, res, next) {
    res.sendFile('index.html', { root: 'views' });
}