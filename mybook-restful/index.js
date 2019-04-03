// 入口文件
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();
// 挂载静态资源
app.use('/www',express.static('public'));
//挂载参数处理中间件
app.use(bodyParser.urlencoded({extended: false}));
//挂载路由
app.use(router);

app.listen(3000,()=>{
    console.log('running...')
})




