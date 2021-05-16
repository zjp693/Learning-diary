import React, { Component } from 'react'

export default class father extends Component {
    state = {
        summ: 20
    }
    render() {
        return (
            <button className="bum">
                {this.state.summ}
            </button>
        )
    }
}
