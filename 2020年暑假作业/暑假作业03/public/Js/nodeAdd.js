$(function () {
  // 添加机构
  $('#addBtn').click(function (e) {
    // 阻止默认提交
    e.preventDefault();
    // 表单序列化
    // console.log($('#addForm').serialize());
    $.ajax({
      type: 'post',
      url: '/node/addOne',
      data: $('#addForm').serialize(),
      success: function (results) {
        // console.log(results);
        if(results.code == 200) {
          location.href = '/node/'
        }
      }
    })
  })
})