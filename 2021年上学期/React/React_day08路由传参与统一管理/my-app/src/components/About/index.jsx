import React, { Component } from 'react'

export default class index extends Component {
    state = {
        id: ''
    }
    componentDidMount() {

        const id = new URLSearchParams(this.props.match.params)

        this.setState({
            id: id.get("id")
        })

    }
    render() {
        return (
            <div>
                about组件
                {this.state.id}
            </div>
        )
    }
}
