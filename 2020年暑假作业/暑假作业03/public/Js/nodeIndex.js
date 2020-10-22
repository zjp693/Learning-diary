$(function () {
  // 删除机构
  $('tbody').on('click', '#deleteBtn', function () {
    // console.log($(this).data('id'));
    $.ajax({
      type: 'delete',
      url: '/node/deleteOne',
      data: {
        id: $(this).data('id')
      },
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          location.href = '/node/'
        }
      }
    })
  })
  // 模糊查询
  $('#filterBtn').click(function (e) {
    // 阻止默认提交
    e.preventDefault();
    // console.log($('#filterForm').serialize());
    $.ajax({
      type: 'get',
      url: '/node/findByFilter',
      data: $('#filterForm').serialize(),
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          let listStr = template('listtempl', results);
          // console.log(listStr);
          $('tbody').html(listStr);
        }
      }
    })
  })
})