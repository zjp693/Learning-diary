import propTypes from "prop-types"
import React, { Component } from 'react'

export default class ComSom extends Component {
    state = {
    father: "曹操2"
  }
      // 如果要给类子组件的Props设置默认值
    // 这个是默认值式的静态属性
    static defaultProps = {
        son:"子组件的值"
    }
      // 子组件中的方法
  triggerFather = () => {
    // 父组件传递给子组件的方法(子组件传递给父组件的数据)
    this.props.son2Father(this.state.father)
  }
 static propTypes = {
    son: propTypes.string
  }
    render() {
        return (
            <div className="son">
                {/*  直接使用this.props.属性*/}
                <h3>我是子组件{this.props.son}</h3>
                <button onClick={this.triggerFather}>点我,把值传递给 (曹操)父组件</button>
            </div>
        )   
    }
}


