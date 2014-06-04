var express = require('express');
var app = express();
app.configure(function () {
    app.get('/', function(req,res) {
        res.sendfile('public/index.html');
    });

    app.get(/^(.+)$/, function(req, res) {
        res.sendfile('public/' + req.params[0]);
    });
});
app.listen(3000); //the port you want to use