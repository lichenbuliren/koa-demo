var path = require('path');
var koa = require('koa');
var routers = require('./routers');
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var staticServer = require('koa-static');
var mongoose = require('mongoose');
var app = koa();



app.use(logger());
app.use(staticServer(path.join(__dirname, 'public')));
app.use(bodyParser());
// 自定义路由
routers(app);

// Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost/apidoc', function(error) {
    if (error) {
        console.log(error);
    }
    app.listen(3000);
});

