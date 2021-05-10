import React, { Component } from 'react'

// 引入子组件
import Daughter from "../Daughter";
export default class Father extends Component {
   // 1.在父组件中声明数据
    state = {
        daughter:"拉拉拉"
    }
    // 2.在父组件中使用子组件，把值通过属性赋值给子组件
    // 3.子组件通过props(只读的，把props 作为props作为函数组件的参数)
    render() {
        return (
            <div className="father">
                {/* 在父组件中使用子组件, 把值通过属性值赋值给子组件   */}
                <h3>我是夫组件</h3>
                <Daughter></Daughter>
            </div>
        )
    }
}
