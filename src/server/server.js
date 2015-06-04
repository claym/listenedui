var koa = require('koa');
var route = require('koa-route');

var app = koa();

app.use(route.get('/', index));
app.use(route.get('/about', about));

app.listen(8000, () => {
    console.log('Listened UI started on port 8001');
});