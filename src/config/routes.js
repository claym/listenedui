'use strict';
import mount from 'koa-mount';
import root from '../server/routes/root.js';

export default function(app) {
    app.use(mount('/', root));
};