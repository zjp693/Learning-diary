$('#loginForm').bootstrapValidator({
    live: 'enabled',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    submitButton: "#loginbuttom",
    fields: {
        email: {
            validators: {
                notEmpty: {
                    message: '邮箱地址不能为空'
                },
                stringLength: {
                    min: 4,
                    max: 100,
                    message: '只能为字母和数字，最短为4，最长为100'
                },
                emailAddress: {
                    message: '邮箱地址格式有误'
                },
                callback: {
                    message: '用户名或者密码错误'
                }
            }
        },

        password: {

            validators: {
                notEmpty: {
                    message: '密码不能为空'
                },

                regexp: { //正则表达式
                    regexp: /^[a-zA-Z0-9_]{6,30}$/,
                    message: '只能为字母数字，最短6，最长30！'
                },
                callback: {
                    message: "用户名或者密码错误"
                }
            }

        }
    }
})
    // .on('success.form.bv', function (e) {//点击提交之后
    //     e.preventDefault();
    //     var $form = $(e.target);
    .on('success.form.bv', function (e) {//点击提交之后
        e.preventDefault();
        var $form = $(e.target);
        //其他参数:beforeSend在发送之前可以使用return false取消,timeout超时时间,error,async同步还是异步
        $.ajax({
            type: 'post',//get或post
            url: '/admin/login',//请求的地址
            data: $form.serialize(),//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
            // dataType:'json',//text,json,xml,jsonp
            success: function (data) {//成功的回调函数
                console.log(data);
                //显示错误
                if (data.code == 500) {
                    // console.log(1);
                    $form.data('bootstrapValidator').updateStatus("email", "INVALID", 'callback');
                    $form.data('bootstrapValidator').updateStatus("password", "INVALID", 'callback');
                }

                if (data.code == 200) {
                  location.href='/admin'
               }

            }
            //Cannot set headers after they are sent to the client写了多次res.send()
        })

    });

