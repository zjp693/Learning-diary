window.onload = function () {

    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var reglogin = /^[a-zA-Z0-9_-]{6,16}$/
    var regqq = /^[1-9]\d{4,}$/; // qq正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //中文正则表达式
    var regmsg = /^\d{6}$/; //短信验证码正则表达式

    var tel = document.querySelector('#tel')
    var login = document.querySelector('#login')
    var logins = document.querySelector('#logins')

    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')


    show(qq, regqq)
    show(nc, regnc)
    show(msg, regmsg)










    show(tel, regtel)
    show(login, reglogin)
    function show(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success',
                    this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'

            } else {
                this.nextElementSibling.className = 'error',
                    this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入'
            }
        }
    }


    logins.onblur = function () {
        if (login.value == this.value) {
            this.nextElementSibling.className = 'success',
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'

        } else {
            this.nextElementSibling.className = 'error',
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入'
        }
    }
}