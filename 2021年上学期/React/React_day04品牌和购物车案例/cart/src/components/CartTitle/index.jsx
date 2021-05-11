import React, { Component } from 'react'

export default class CartTitle extends Component {
    render() {
        return (
            <div className="title">{this.props.name}的商品</div>
        )
    } 
}
