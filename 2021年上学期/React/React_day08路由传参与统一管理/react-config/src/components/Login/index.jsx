import React, { Component } from 'react'

export default class index extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                login组件
            </div>
        )
    }
}
