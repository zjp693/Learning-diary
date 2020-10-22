$(function () {
    // 渲染第一页数据
    getlistdata()

    $('.page').on('click', 'a', function () {
        let pagenum = $(this).data('pagenum')
        getlistdata(pagenum)
    })

})


function getlistdata(pagenum, pagesize) {
    //其他参数:beforeSend在发送之前可以使用return false取消,timeout超时时间,error,async同步还是异步
    $.ajax({
        type: 'get',//get或post
        url: '/article',//请求的地址
        data: {
            pageNum: pagenum || 1,
            pageSize: pagesize || 6
        },//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
        // dataType: 'json',//text,json,xml,jsonp
        success: function (data) {//成功的回调函数
            //渲染页面
            for (let i = 0; data.data.records[i].length; i++) {
                data.data.records[i].publishDate = moment('data.data.records[i].publishDate').format('YYYY-MM-DD');
            }

            console.log(data)
            let listStr = template('list_tpl', data.data)
            $('.list').html(listStr)


            let paginationStr = template('page_tpl', data.data);
            $('.page').html(paginationStr);
        }
    })
}