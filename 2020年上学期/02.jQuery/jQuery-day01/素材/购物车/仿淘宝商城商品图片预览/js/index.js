$(function () {
    // 移入src事件
    $('.Xcontent08>div').mouseenter(function () {
        // console.log($(this).attr('src'));
        $('.Xcontent08>div.active').removeClass('active');
        $(this).addClass('active');
        $('.Xcontent06>img').attr('src', $(this).children('img').attr('src'));
    })

    // 选中事件
    $('.Xcontent26>div').click(function () {
        // console.log($(this).attr('src'));
        $('.Xcontent26>div.active').removeClass('active');
        $(this).addClass('active');
        $('.Xcontent06>img').attr('src', $(this).children('img').attr('src'));
    })

    // 数量事件
    // -
    let num = 1;
    $('.Xcontent30>.Xcontent32').click(function () {
        num--;
        if (num < 0) {
            num = 0;
        }
        $('.Xcontent30 input').val(num);
    })

    // +
    $('.Xcontent30>.Xcontent33').click(function () {
        num++;
        $('.Xcontent30 input').val(num);
    })

    // 自定义事件
    $('.Xcontent30 input').blur(function () {
        num = $('.Xcontent30 input').val();
    })


})