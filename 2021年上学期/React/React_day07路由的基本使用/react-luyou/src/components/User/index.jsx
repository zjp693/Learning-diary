import React from "react"
import { Redirect } from "react-router-dom"
// 当User没有登陆的时候 要重定向到Login
class User extends React.Component {

  state = {
    isLogin: false
  }
  render() {
    let user = <div className="User" >
      <h3>User页面</h3>
    </div>
    return this.state.isLogin ? user : <Redirect to="/login" />
  }

}

export default User;
