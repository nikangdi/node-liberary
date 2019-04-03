
/*
    get     http://localhost:3000/books
    get     http://localhost:3000/books/book
    post    http://localhost:3000/books/book
    get     http://localhost:3000/books/book/1
    put     http://localhost:3000/books/book
    delete  http://localhost:3000/books/book/2
*/

const express = require('express');
const service = require('./service.js');
const router = express.Router();
//提供所有图书信息
router.get('/books',service.allBooks);
// 增加图书信息
router.post('/books/book',service.addBook);
// 删除信息
router.delete('/books/book/:id',service.deleteBook);
//获取图片信息
router.get('/books/book/:id',service.getBookById);
//修改信息
router.put('/books/book',service.editBook);






module.exports = router;