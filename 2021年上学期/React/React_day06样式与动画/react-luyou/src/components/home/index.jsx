import React, { Component } from 'react'

import { NavLink, Route, Switch } from 'react-router-dom'


const Recod = () => {
    return (
        <div>
            <h3>我是推荐</h3>
        </div>
    )
}

const Toplist = () => {
    return (
        <div>
            <h3>我是排行榜</h3>
        </div>
    )
}

const Playlist = () => {
    return (
        <div>
            <h3>我是歌单</h3>
        </div>
    )
}



export default class index extends Component {



    render() {
        return (
            <div className="Home">
                <h3>Home页面</h3>
                <NavLink exact to="/home/recod">推荐</NavLink>
                <NavLink exact to="/home/toplist">排行榜</NavLink>
                <NavLink exact to="/home/playlist">歌单</NavLink>

                <Switch>
                    <Route exact path="/home/recod" component={Recod}></Route>
                    <Route exact path="/home/toplist" component={Toplist}></Route>
                    <Route exact path="/home/playlist" component={Playlist}></Route>
                </Switch>
            </div>
        )
    }
}
