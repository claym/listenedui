import config from './';
import morgan from 'koa-morgan';

export default function(app) {
    app.use(morgan.middleware(config.app.morgan.format));
};