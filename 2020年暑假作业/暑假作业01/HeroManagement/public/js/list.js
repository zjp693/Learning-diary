$(function () {
    //渲染列表
    list()

    function list() {
        //其他参数:beforeSend在发送之前可以使用return false取消,timeout超时时间,error,async同步还是异步
        $.ajax({
            url: '/list',//请求的地址
            data: null,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
            // dataType:'json',//text,json,xml,jsonp
            success: function (data) {//成功的回调函数
                //渲染页面

                // console.log(11);
                let tbodyStr = template("list_templ", data);

                $('tbody').html(tbodyStr);
            }
        })
    }

    //#region 2.添加用户
    $('#addbtn').on('click', function () {
        // console.log("11111");
        let formData = $('#from').serialize();
        console.log(formData);
        // console.log(1);
        $.ajax({
            type: 'POST',
            url: "/add/add",
            data: formData,
            success: function (results) {
                console.log(results);
                if (results.code == 200) {
                    list();

                    location.href = '/'

                }
            }
        })
    })
    //#endregion




    //#region 3.删除用户
    $('tbody').on('click', '.btn-danger', function () {
        console.log($(this).data('id'));

        let id = $(this).data('id');
        $.ajax({
            type: "PUT",
            url: "/delete",
            data: {
                id: id
            },
            success: function (results) {
                console.log(results);
                if (results.code == 200) {
                    list();
                }
            }
        })
    })
    //#endregion



    ////#region     // 搜索英雄
    $("#findBtn").click(function (e) {
        // 清除默认事件
       
        e.preventDefault();
        // 获取输入框内容
        let text = $("#search").val().trim();
        console.log(text);
        if (text.length == 0) {
            // 重新渲染数据
            console.log(8888);
            list();
        } else {
            // 发送ajax请求
            $.ajax({
                type: "GET",
                url: "/search",
                data: {
                    text
                },
                success: function (results) {
                    console.log(results);
                    if (results.code == 200) {
                        // 渲染数据
                        let listStr = template("list_templ", results);
                        // 渲染模板数据
                        $("tbody").html(listStr);
                    } else {
                        alert(results.message);
                    }
                }
            })
        }
    })
    ////#endregion
})