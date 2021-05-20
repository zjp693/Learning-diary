import React, { Component } from 'react'

export default class index extends Component {
    btnClick = () => {
        this.props.history.push("/login")
    }

    render() {
        return (
            <div className="about">
                <h3>我是about组件</h3>
                <button onClick={this.btnClick}>跳转到Login页面</button>
            </div>
        )
    }
}
