import React, { Component } from 'react'


// 
import Father from "../Father";
export default class App extends Component {
    constructor() {
        super();
        // 通过React.createRef() 创建ref对象
        this.txt = React.createRef();

    }
    // 通过ref 对象获取文本框的值
            getTxt = () => {
    console.log(this.txt.current.value);
}
    render() {
        return (
            <div>
                {/* 通过ref绑定对象 */}
                <input type="text" ref={this.txt} />
                <button onClick={this.getTxt}>点我</button>
                <Father></Father>
                 <p>我是App组件</p>
            </div>
        )
    }
}

