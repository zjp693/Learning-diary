import React, { Component } from 'react'
import Son from "../son_1"
import Soms from "../son_2"
export default class father extends Component {
    state = {
        sums: 0,
        sum: 0,
        summ: 0
    }

    fn = () => {
        let sums
        this.setState({
            sums: this.state.sum + this.state.summ
        })
        // console.log(this.props.sum);
        return sums
    }
    render() {
        return (
            <div className="box">
                {this.fn()}
                <Son item={this.state.sums}></Son>
                <Soms></Soms>
            </div>
        )
    }
}
