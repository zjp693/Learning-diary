$(function () {
    $('#loginout').on('click', 'a', function () {
        // alert(1)
        console.log(1);

        loginout()
    })
})
function loginout() {
    //其他参数:beforeSend在发送之前可以使用return false取消,timeout超时时间,error,async同步还是异步
    $.ajax({
        type: 'get',//get或post
        url: '/loginout',//请求的地址
        data: null,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        // dataType: 'json',//text,json,xml,jsonp
        success: function (data) {//成功的回调函数
            //渲染页面
            console.log(data)
            if (data.code == 200) {
                location.href = '/'
                console.log(1);

            }
        }
    })
}