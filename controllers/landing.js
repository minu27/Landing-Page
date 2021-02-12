const path = require('path');

exports.get_landing = function(req, res, next) {
    res.sendFile('index.html', { root: 'views' });
}
exports.post_contact = function(req, res, next) {
    console.log(req.body);
    
    console.log("Request Recieved");
    res.sendFile('index.html', { root: 'views' });
}