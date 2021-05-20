import React, { Component } from 'react'

import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
export default class App extends Component {

  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to="/home?name=zs&age=18&hobby=hehehe">首页</NavLink>
          <NavLink to="/About/123456">关于</NavLink>
          <NavLink exact to={{
            pathname: "/login",

            state: { name: 111 }
          }} >登录</NavLink>


          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/About/:id" component={About}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>

        </HashRouter>
      </div >


    )
  }
}
