$(function () {
  // 写文章(添加文章)
  $('#postsAddBtn').click(function (e) {
    // 阻止默认提交
    e.preventDefault();
    console.log($('#postsAddForm').serialize());
    $.ajax({
      type: 'post',
      url: '/admin/posts/addOne',
      data: $('#postsAddForm').serialize(),
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          location.href = '/admin/posts'
        }
      }
    })
  })
})