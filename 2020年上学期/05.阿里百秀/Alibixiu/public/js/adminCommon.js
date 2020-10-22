//公共代码 
$(function () {
    //#region 公共功能：退出登陆
    $('#logoutbuttom').click(function () {
        console.log(555);
        logout()
    })
    //#endregion
//#region 公共功能：控制侧边栏的显示和隐藏
    $('#navbarbutton').click(function () {
        console.log(2);
        $('.main, .aside').toggleClass('toggle');
        console.log(3);
    })
    
    //#endregion

})

//#region  公共功能：
function logout() {
    // console.log(1111111111);
    //其他参数:beforeSend在发送之前可以使用return false取消,timeout超时时间,error,async同步还是异步
    $.ajax({
        type: 'get',//get或post
        url: '/admin/logout',//请求的地址
        data: null,//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        // dataType:'json',//text,json,xml,jsonp
        success: function (data) {//成功的回调函数
            //渲染页面
            if (data.code == 200) {
                location.href = '/admin/login'
            }
        }
    })
}
//#endregion