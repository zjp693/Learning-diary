//8. 收先接收用户输入的用户名，判断该用户名是否是admin,如果不是直接程序终止，
//如果是那么再次提示让用户输入密码,如果密码是88888,那么提示登录成功，否则提示登录失败
let name = 'abc'
if (name == "admin") {
    let password = 123
    if (password == 88888) {
        console.log("登陆成功")
    } else {
        console.log("登陆失败")
    }
} else {
    console.log('交易结束')
}
