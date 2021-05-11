import React, { Component } from 'react'

// 引入子组件
import Daughter from "../Daughter";
import Son from "../Som";
export default class Father extends Component {
   // 1.在父组件中声明数据
    state = {
        daughter: "拉拉拉",
        son: "贾拉个",
        fatherName:"佳佳"
    }
    // 2.在父组件中使用子组件，把值通过属性赋值给子组件
// 2.1 再父组件上声明一个方法
    son2Father = (name) => {
        console.log(name);
        this.setState({
            fatherName:name
        })
    }

    // 3.子组件通过props(只读的，把props 作为props作为函数组件的参数)
    render() {
        return (
            <div className="father">
                {/* 2.在父组件中使用子组件, 把值通过属性值赋值给子组件   */}
                <h3>我是父组件</h3>
                <Daughter daughter={this.state.daughter}></Daughter>
                <Son son={this.state.son} son2Father={this.son2Father}></Son>
            </div>
        )
    }
}
