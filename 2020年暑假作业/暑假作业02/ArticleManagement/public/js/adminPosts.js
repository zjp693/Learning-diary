$(function () {
  // 刚打开页面的时候 进行数据的渲染
  getDataByCondition({});
  // 分页显示数据
  $('.pagination').on('click', 'a', function () {
    // console.log($(this).data('page'));
    let pagenum = $(this).data('page');
    let pagesize = 3;
    $.ajax({
      type: 'get',
      url: '/admin/posts/findByPaging',
      data: {
        pagenum,
        pagesize
      },
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          // 点击分页页码 再一次重新渲染数据
          // 渲染列表
          let listStr = template('list_templ', results);
          // console.log(listStr);
          $('tbody').html(listStr);
          // 渲染分页
          let pagingStr = template('paging_templ', results);
          // console.log(pagingStr);
          $('ul.pagination').html(pagingStr);
          // 当分页渲染完成 就应该把页码存起来
          $('html').attr('data-pagenum', results.pagenum);
        }
      }
    })
  })
  // 筛选数据
  $('#filterBtn').click(function (e) {
    e.preventDefault();
    // console.log($('#filterForm').serialize());
    let cid = $('#filterForm select[name="cid"]').val();
    let state = $('#filterForm select[name="state"]').val();
    // console.log(cid, state);
    getDataByCondition({
      cid,
      state
    })
  })
  // 删除文章
  $('tbody').on('click', '#deleteBtn', function () {
    // console.log($(this).data('id'));
    $.ajax({
      type: 'delete',
      url: '/admin/posts/delete',
      data: {
        id: $(this).data('id')
      },
      success: function (results) {
        // console.log(results);
        if(results.code == 200) {
          location.href = '/admin/posts'
        }
      }
    })
  })
})

function getDataByCondition(option) {
  let pagenum = option.pagenum || 1;
  let pagesize = option.pagesize || 3;
  let cid = option.cid || null;
  let state = option.state || null;
  $.ajax({
    type: 'GET',
    url: "/admin/posts/findsByFilter",
    data: {
      pagenum: pagenum,
      pagesize: pagesize,
      cid: cid,
      state: state
    },
    success: function (results) {
      // console.log(results)
      if (results.code == 200) {
        // 渲染列表
        let listStr = template('list_templ', results);
        // console.log(listStr);
        $('tbody').html(listStr);
        // 渲染分页
        let pagingStr = template('paging_templ', results);
        // console.log(pagingStr);
        $('ul.pagination').html(pagingStr);
        // 当分页渲染完成 就应该把页码存起来
        $('html').attr('data-pagenum', results.pagenum);
      }
    }
  })
}
