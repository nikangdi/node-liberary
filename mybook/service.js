const path = require('path');
const fs = require('fs');
const db = require('./db.js');


//渲染主页面
exports.showIndex = (req,res)=>{
    let sql = 'select * from book';
    db.base(sql,null,(result)=>{
        res.render('index',{list:result});
    })
   
}

//跳转到添加图书页面
exports.toAddBook = (req,res)=>{
    res.render('addBook',{});
}

//添加图书   加入到数据库中会自动加上id
exports.addBook = (req,res) =>{
    let info = req.body;
    let book = {};
    for (let key in info ){
        book[key] = info[key];
    }
    let sql ='insert into book set ?';
    db.base(sql,book,(result)=>{
        if (result.affectedRows == 1){
            res.redirect('/');
        }
    })
}

//删除图书
exports.deleteBook = (req,res)=>{
    let id = req.query.id;
    let sql = 'delete from book where id = ?';
    let data = [id];
    db.base( sql , data , (result)=>{
        if(result.affectedRows == 1){
            res.redirect('/');
        }
    })
}

//跳转到 修改图书页面‘

exports.toEditBook = (req,res)=>{
    let id = req.query.id;
    let sql = 'select * from book where id=?';
    let data = [id];
    db.base(sql.data,(result)=>{
        res.render('editBook',result[0]);
    })
}
//编辑图书信息

exports.editBook = (req,res)=>{
    let info = req.body;
    let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
    let data =[info.name,info.author,info.category,info.description,info.id];
    db,base(sql,data,(request)=>{
        if(request.affectedRows == 1){
            res.redirect('/');
        }
    }) 
}