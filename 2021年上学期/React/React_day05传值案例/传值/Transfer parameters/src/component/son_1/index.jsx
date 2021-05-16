import React, { Component } from 'react'

export default class father extends Component {
    state = {
        sum: 11
    }
    add = () => {
        this.setState({
            // state.sum + 1
        })
    }
    render() {
        return (
            <button className="bnt" onClick={this.add}>
                {this.state.sum}
            </button>
        )
    }
}
