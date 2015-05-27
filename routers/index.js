var render = require('../lib/render');
var router = require('koa-router')();
module.exports = function(app) {

    router.get('/', function *(next) {
        this.body = yield render('list', {
            title: '文章列表'
        });
    });

    app.use(router.routes());
}