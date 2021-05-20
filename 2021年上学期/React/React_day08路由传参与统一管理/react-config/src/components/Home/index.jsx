import React, { Component } from 'react'

export default class index extends Component {
    state = {
        name: "",
        age: "",
        hobby: ''
    }
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        console.log(this.props);
        this.setState({
            name: params.get('name'),
            age: params.get('age'),
            hobby: params.get('hobby'),
        })
    }
    render() {
        return (
            <div>
                <h3>首页</h3>
                <p>{this.state.age}--{this.state.name}--{this.state.hobby}</p>
            </div>
        )
    }
}
