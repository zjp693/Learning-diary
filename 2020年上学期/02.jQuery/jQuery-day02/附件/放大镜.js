$(function () {
    $('.leftBox ul>li').mouseenter(function () {
        // 变中图
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.leftBox>.top>img').attr('src', 'img/' + $(this).children('img').attr('msrc'))
        // 变大图
        $('.rightBox>img').attr('src', 'img/' + $(this).children('img').attr('bsrc'))
    })

})