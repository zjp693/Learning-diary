$(function () {
  // 添加用户
  $('#addBtn').click(function (e) {
    // 阻止默认提交
    e.preventDefault();
    // console.log($('#addForm').serialize());
    $.ajax({
      type: 'post',
      url: '/user/addOne',
      data: $('#addForm').serialize(),
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          location.href = '/user/'
        }
      }
    })
  })
})