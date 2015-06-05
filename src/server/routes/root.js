'use strict';

import Router from 'koa-router';
// var router = require('koa-router')();

let router = new Router();



router.get('/', function*(next) {
    this.body = 'Hello World!';
});

module.exports = router.routes();