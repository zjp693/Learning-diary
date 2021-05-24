import React from "react"
import './App.css';
// react-router-dom是应用在网页中的路由包
// BrowserRouter: history模式的URL www.baidu.com/a/b/c  优点: 手动切换路由方便 H5新特性
// HashRouter: hash模式的URL  www.baidu.com/#/a/b/c  优点: 兼容性强 
// Link: 用来改变浏览器中的URL 编译完就是a标签
// NavLink: 和Link一模一样 编译完就是a标签
// Route: 占位符,用来展示组件的
import { BrowserRouter, HashRouter, Link, NavLink, Route, Switch } from "react-router-dom"


// 使用步骤:
// 1.引入 import { BrowserRouter, HashRouter, Link, NavLink, Route } from "react-router-dom"
// 2.使用BrowserRouter或HashRouter包裹整个应用(也可以包裹Link NavLink 和Route)
// 3.Link标签有一个属性: to 跳转到to="地址"
// 4.Route标签 有两个属性 path="地址" component={组件}


import Home from "./components/Home"
import About from "./components/About"
import Other from "./components/Other"
import Login from "./components/Login"
import User from "./components/User"

// 在我们的页面中有两个按钮 一个按钮 home  一个按钮 about 点击home按钮的时候显示home组件 点击about按钮的时候显示about组件
class App extends React.Component {



  render() {
    return (
      // HashRouter 和 BrowserRouter监听路由变化的
      <BrowserRouter>
        {/* Link标签的作用: 改变URL的地址  a标签 */}
        {/* 路由匹配 不是精确匹配 是自左而右一个个的进行比对模糊匹配 */}
        {/* <Link to="/home">Home</Link>    <Link to="/home/about">About</Link> */}
        {/* <NavLink exact activeStyle={{ color: 'red' }} to="/home">Home</NavLink>
        <NavLink exact activeStyle={{ color: 'red' }} to="/home/about">About</NavLink> */}

        <NavLink activeClassName="active" to="/home">Home</NavLink><br />
        <NavLink activeClassName="active" to="/about">About</NavLink><br />
        <NavLink activeClassName="active" to="/login">Login</NavLink><br />
        <NavLink activeClassName="active" to="/user">User</NavLink><br />

        {/* 组件 */}

        {/* switch规定了只匹配一个 匹配到就不继续匹配了 */}
        {/* 用Switch组件包裹 Route就可以用了 */}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/user" component={User}></Route>
          <Route component={Other}></Route>
        </Switch>


      </BrowserRouter >

    );
  }

}

export default App;
