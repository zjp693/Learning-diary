$(function () {

    //- 功能1：点击"全选"复选框，下面的4个复选框都会选中，点击取消，下面也都不会被选中
    $('input#all').click(function () {
        $('tr input[type="checkbox"]').prop('checked', $(this).prop('checked'));
        console.log($(this).prop('checked'));
    })

    // - 功能2：点击下面左边的那4个复选框，只有当下面4个复选框全部选中的时候，上面的全选才会被选中，否则不会被选中
    let arr = $('tr input[type="checkbox"][id!=all]');
    $('tr input[type="checkbox"][id!=all]').click(function () {
        arr.each(function (i) {
            $('input#all').prop('checked', true);
            if (!arr.eq(i).prop('checked')) {
                $('input#all').prop('checked', false);
                return false;
            }
        })

    })
    // - 功能3：点击"商品数量"的"+"号，当前的这个行前面的复选框也被选中，同时中间的数字也会改变，每次增量是1，后面的小计也会跟着变化，
    $('tr .reduce').click(function () {
        $(this).parent().parent().siblings('td').children('input[type="checkbox"]').prop('checked', true)
        let num = $(this).next('input').val();
        num--;
        if (num < 1) num = 1;
        $(this).next('input').val(num);
        $(this).parent().parent().next('td').html(`${num * 20}￥`);

        if ($('tr input[type="checkbox"][id!=all]:checked').length == $('tbody > tr').length) $('input#all').prop('checked', true);
    })

    // - 功能4：点击"商品数量"的"-"号，当前的这个行前面的复选框也被选中，同时中间的数字也会改变，每次减量是1，后面的小计也会跟着变化，当 数量是1的时候，就不能在减少了
    $('tr .add').click(function () {
        $(this).parent().parent().siblings('td').children('input[type="checkbox"]').prop('checked', true)
        let num = $(this).prev('input').val();
        num++;
        $(this).prev('input').val(num);
        $(this).parent().parent().next('td').html(`${num * 20}￥`);

        if ($('tr input[type="checkbox"][id!=all]:checked').length == $('tbody > tr').length) $('input#all').prop('checked', true);
    })


})