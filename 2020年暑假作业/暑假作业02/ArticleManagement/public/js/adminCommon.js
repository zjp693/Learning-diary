$(function () {
  // 退出登录功能 公共功能
  $('#logoutButton').click(function () {
    $.ajax({
      type: 'get',
      url: '/admin/logout',
      data: null,
      success: function (results) {
        // console.log(results);
        if(results.code == 200) {
          location.href = '/admin/login'
        }
      }
    })
  })
})