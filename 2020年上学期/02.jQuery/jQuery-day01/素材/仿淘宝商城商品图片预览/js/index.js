$(function () {
  //创建变量count
  var count = 1;


  //功能一:
  //获取ol中的子元素 创建鼠标移入事件
  $('.Xcontent08>div').mouseenter(function () {
    //改变边框样式
    $(this).css('border', '1px solid red');

    //获取鼠标移入图片的路径
    var img = $(this).children().attr('src');
    //将大图路径更换
    $('.Xcontent06>img').attr('src', img);
  })

  //创建鼠标移出事件
  $('.Xcontent08>div').mouseleave(function () {
    //改变边框样式
    $(this).css('border', '1px solid #e8e8e8');
  })

  //创建鼠标点击事件
  $('body').click(function (e) {
    //获取鼠标点击元素
    let target = $(e.target);

    //功能二:
    //判断元素是否为颜色图片
    if (target.is('.Xcontent28>img')) {
      //改变边框样式
      $('.Xcontent29').css('border', '1px solid #e8e8e8');
      $('.Xcontent28').css('border', '1px solid red');

      //获取鼠标移入图片的路径
      var img = $(this).children().attr('src');
      //将大图路径更换
      $('.Xcontent06>img').attr('src', img);
    } else if (target.is('.Xcontent29>img')) {
      //改变边框样式
      $('.Xcontent28').css('border', '1px solid #e8e8e8');
      $('.Xcontent29').css('border', '1px solid red');

      //获取鼠标移入图片的路径
      var img = $(this).children().attr('src');
      //将大图路径更换
      $('.Xcontent06>img').attr('src', img);
    } else {
      //改变边框样式
      $('.Xcontent28').css('border', '1px solid #e8e8e8');
      $('.Xcontent29').css('border', '1px solid #e8e8e8');
    }


    //功能三:

    //判断元素是否为加减图片
    if (target.is('.Xcontent32>img')) {
      count--;
    } else if (target.is('.Xcontent33>img')) {
      count++;
    }
    //判断count是否小于等于0
    if (count <= 0) {
      //更改为默认值
      count = 1;
    }
    //更换input的value值
    $('input').val(count);
  })
})

  // $(function () {
  //   // 1. 鼠标经过左侧的小li 
  //   $(".Xcontent div").mouseover(function () {
  //     // 2. 得到当前小li 的索引号
  //     var index = $(this).index();
  //     console.log(index);
  //     // 3. 让我们右侧的盒子相应索引号的图片显示出来就好了
  //     $("#content div").eq(index).show();
  //     // 4. 让其余的图片（就是其他的兄弟）隐藏起来
  //     $("#content div").eq(index).siblings().hide();
  //     // 链式编程
  //     $("#content img").eq(index).show().siblings().hide();

  //   })
  // })