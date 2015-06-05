'use strict';

import config from '../config';

import koa from 'koa';

import koaconfig from '../config/koa.js';
import koaroute from '../config/routes.js';

var app = koa();

koaconfig(app);
koaroute(app);

app.listen(config.app.port, () => {
    console.log('Listened UI started on port', config.app.port);
});