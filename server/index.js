const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
    ctx.body = 'hello world';
})

app.listen(3000, () => {
    console.log('Now listening on port: 3000')
});




