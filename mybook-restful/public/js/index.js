
$(function(){

    //初始化数据列表
    function initList(){    
        $.ajax({
            type:'get',
            url:'/books',
            dataType:'json',
            success:function(data){
                    var html = template('indexTpl',{list : data});
                    $('#dataList').html(html);

                    //caozuo DOM
                    $('#dataList').find('tr').each(function( index,element){
                        var td = $(element).find('td:eq(5)');   //
                        var id = $(element).find('td:eq(0)').text();//获得id
                        td.find('a:eq(0)').click(function(){   //注册修改事件
                            editBook(id);
                        });
                        td.find('a:eq(1)').click(function(){  //注册 删除事件
                             deleteBook(id);
                        });
                        addBook();//绑定添加图书事件
                        // 重置表单
                        var form = $('#addBookFrom');
                        form.get(0).reset();
                        form.find('input[type=hidden]').val('');

                    })
            
            }
        });
    }
    initList();
    //添加图书
    function addBook(){
        $('#addBookId').click(function(){
            var form = $('#addBookFrom');
            var mark = new MarkBox(600,400,'编辑图书',form.get(0));
            mark.init();
            form.find("input[type=button]").unbind('click').click(function(){  //先unbind是因为上面可能绑定了查询的click事件
                $.ajax({
                    type: 'post',
                    url:'/books/book',
                    data: form.serialize(), //序列化要发送的表单数据
                    dataType: 'json',
                    success: function(data){
                        if(data.flag=='1'){  //表示提交到数据库成功
                            mark.close();
                            initList();   //重新刷新页面，初始化数据列表
                        }
                    }

                })
            })
        })

    };
    // 查询图书，删除图书
    function deleteBook(id){
        $.ajax({
            type:'delete',
            url: '/books/book/'+id,
            dataType:'json',
            success: function(data){
                    if(data.flag == '1'){
                        initList();
                    }
            }
        })
    }
    function editBook(id){
        var form = $('#addBookForm');
        $.ajax({
            type:'get',
            dataType:'json',
            url:'/books/book/'+id,
            success:function(data){
                var mark = new MarkBox(600,400,'编辑图书',form.get(0));
                mark.init();
                form.find('input[name=id]').val(data.id);
                form.find('input[name=name]').val(data.name);
                form.find('input[name=author]').val(data.author);
                form.find('input[name=category]').val(data.category);
                form.find('input[name=description]').val(data.description);

                form.find('input[name=button]').unbind('click').click(function(){  //先解绑之前添加图书信息的按键事件
                    $ajax({
                        type:'put',
                        url:'/books/book',
                        data:form.serialize(),
                        dataType:'json',
                        success: function(data){
                            if(data.flag == '1'){
                                mark.close();
                                initList();
                            }
                        }
                    })
                })

            }
        })




    }


})