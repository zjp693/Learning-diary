$(function () {
  $('#loginBtn').click(function (e) {
    e.preventDefault();
    // console.log($('#loginForm').serialize());
    $.ajax({
      type: 'post',
      url: '/login',
      data: $('#loginForm').serialize(),
      success: function (results) {
        // console.log(results);
        // 登录失败显示弹出框
        if (results.code == 500) {
          alert(results.message);
        }
        // 登录成功后跳转到首页
        if (results.code == 200) {
          location.href = '/'
        }
      }
    })
  })
})