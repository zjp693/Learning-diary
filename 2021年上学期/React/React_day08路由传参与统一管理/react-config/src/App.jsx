import React, { Component } from 'react'

import { HashRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from './routers';

// import Home from "./components/Home";
// import About from "./components/About";
// import Login from "./components/Login";22
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
          {renderRoutes(routes)}
        </HashRouter>
      </div >


    )
  }
}
