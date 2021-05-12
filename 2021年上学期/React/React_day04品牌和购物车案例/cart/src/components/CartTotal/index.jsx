import React, { Component } from 'react'

export default class CartTotal extends Component {
    // 2.3.定义一个方法 用来计算总价

    computedTotal = () => {
        let sum = 0;
        this.props.list.forEach(item => {
            sum+=item.price*item.num
        })
        return sum
 }
    render() {
        return (
           <div className="total">
                <span>总价：{this.computedTotal()}</span>
          <button>结算</button>
        </div>
        )
    }
}
