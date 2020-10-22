$(function () {
  // 表单校验
  $("#loginForm").bootstrapValidator({
    // 什么时候校验
    live: 'enabled',
    // 反馈图标
    feedbackIcons: {
      // 合法的
      valid: 'glyphicon glyphicon-ok',
      // 不合法的
      invalid: 'glyphicon glyphicon-remove',
      // 校验中
      validating: 'glyphicon glyphicon-refresh'
    },
    // 提交按钮
    submitButtons: "#loginButton",
    fields: {
      username: {
        // 关于username的校验器
        validators: {
          // 不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          // username的长度
          stringLength: {
            min: "3",
            max: "6",
            message: "最短为3,最长为6"
          },
          // 当服务器验证过之后再来重新校验
          callback: {
            message: "用户名或密码错误"
          }
        }
      },
      password: {
        // 关于password的校验器
        validators: {
          notEmpty: {
            message: '密码不能为空！'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_]{3,11}$/,
            message: '只能为字母数字，最短3，最长11！'
          },
          callback: {
            message: "用户名或密码错误"
          }
        }
      }
    }
  })
    // 当校验成功后 发起ajax请求
    .on('success.form.bv', function (e) {
      // 为了阻止默认提交      
      e.preventDefault();
      // 就是 form表单
      var $form = $(e.target);
      // console.log($form.serialize());
      $.ajax({
        type: 'POST',
        url: '/admin/login',
        data: $form.serialize(),
        success: function (result) {
          console.log(result);
          // 回显错误信息
          if (result.code == 500) {
            $form.data("bootstrapValidator").updateStatus("username", "INVALID", 'callback');
            $form.data("bootstrapValidator").updateStatus("password", "INVALID", 'callback');
          }
          // 登录成功时的跳转
          if (result.code == 200) {
            location.href = '/admin/posts'
          }
        }
      })
    });
});



