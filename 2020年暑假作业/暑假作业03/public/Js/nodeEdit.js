$(function () {
  $('#updateBtn').click(function (e) {
    // 阻止默认提交
    e.preventDefault();
    // console.log($('#updateForm').serialize());
    $.ajax({
      type: 'put',
      url: '/node/editOne',
      data: $('#updateForm').serialize(),
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          location.href = '/node/'
        }
      }
    })
  })
})