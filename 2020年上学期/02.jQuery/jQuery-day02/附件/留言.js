$(function () {
    var $content = $('.content');
    // console.log($content)
    var $btn = $('input[type="button"]')
    // console.log($btn)
    var $msgFrame = $('.msgFrame')
    // console.log($msgFrame)
    var $num = $('.numofmessage')

    $btn.click(function () {
        var count = 0
        if ($content.val().trim().length == null) {
            alert('您还没有输入任何内容')
        } else {
            $msgFrame.prepend(`
        <div class="content_1">
    	         <img class="name" src="http://qlogo3.store.qq.com/qzone/1262283870/1262283870/100?1481718124" alt="photo">
    	         <div class="mainInfo">
    		         <div class="userId"><a href="#">zipple</a></div>
    		         <div class="conInfo">
    				      ${$content.text()}
    		            </div>
    		         <div class="time">${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</div>
    		    </div>
              `)
            count = $msgFrame.children().length
        }

        $content.html('')

        $num.html(`留言(${count})`)
    })

})