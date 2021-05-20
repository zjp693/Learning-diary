import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Login from "../components/login";
import Other from "../components/other";
export default class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    {/* <Home></Home>
                    <About></About> */}
                    <Link to="/hoem">home</Link>||
                    <Link to="/about">about</Link>||
                      <Link to="/login">login</Link>||
                      <Link to="/other">other</Link>
                    <Route path="/hoem" component={Home} ></Route>
                    <Route path="/about" component={About} ></Route>
                    <Route path="/login" component={Login} ></Route>
                    <Route path="/other" component={Other} ></Route>
                </HashRouter>
            </div>
        )
    }
}

