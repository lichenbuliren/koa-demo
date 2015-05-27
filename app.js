var koa = require('koa');
var routers = require('./routers');
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var staticServer = require('koa-static');
var path = require('path');
var app = koa();

app.use(logger());
app.use(staticServer(path.join(__dirname, 'public')));
app.use(bodyParser());
// 自定义路由
routers(app);

app.listen(3000);