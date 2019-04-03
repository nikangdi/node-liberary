//路由模块
const express = require('express');
const router = express.Router();
const service = require('./service.js');

//路由处理

//渲染主页
router.get('/',service.showIndex); 
 //跳转到添加图书页面
router.get('/toAddBook',service.toAddBook);
//添加图书
router.post('addBook',service.addBook);








module.export = router;


