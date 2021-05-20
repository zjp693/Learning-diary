import React, { Component } from 'react'

import { NavLink, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
export default class index extends Component {
    state = {
        id: ''
    }
    componentDidMount() {

        const id = new URLSearchParams(this.props.match.params)
        console.log(this.props);
        this.setState({
            id: id.get("id")
        })

    }
    render() {
        return (
            <div>
                <h3>关于我们的故事</h3>
                <NavLink to='/about/he'>最终我还是弄丢了他</NavLink>
                <NavLink to='/about/she'>最终我还是弄丢了她</NavLink>
                {
                    renderRoutes(this.props.route.routes)
                }
            </div>
        )
    }
}
