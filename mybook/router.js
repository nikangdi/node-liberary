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
router.post('/addBook',service.addBook);
//删除 图书
router.get('/deleteBook',service.deleteBook);

//跳转到编辑图书页面
router.get('/toEditBook',service.toEditBook);

//编辑图书信息
router.get('/editBook',service.editBook)







module.export = router;


