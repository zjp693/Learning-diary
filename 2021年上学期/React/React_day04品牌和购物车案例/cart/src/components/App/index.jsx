import React, { Component } from 'react'

import CartTitle from "../CartTitle";

import CatTotal from "../CartTotal";

import CartList from "../CartList";
export default class index extends Component {
//  ### 功能一: 渲染购物车标题
// 1.1.给根组件初始化状态
    // 2.1.定义根组件的state-> list
       state = {
           name: "杨文森",
              list: [{
            id: 1,
            name: 'TCL彩电',
            price: 1000,
            num: 1,
            img: 'img/a.jpg'
          }, {
            id: 2,
            name: '机顶盒',
            price: 1000,
            num: 1,
            img: 'img/b.jpg'
          }, {
            id: 3,
            name: '海尔冰箱',
            price: 1000,
            num: 1,
            img: 'img/c.jpg'
          }, {
            id: 4,
            name: '小米手机',
            price: 1000,
            num: 1,
            img: 'img/d.jpg'
          }, {
            id: 5,
            name: 'PPTV电视',
            price: 1000,
            num: 2,
            img: 'img/e.jpg'
          }]
    }
//### 功能二: 渲染购物车的总价


// 2.2.把list数据传递给CartTotal组件
    render() {
        return (
            <div id="app">
                <div className="container">
                    <div className="cart">
                        {/* <!-- title --> */}
                        {/* // 1.3.渲染name */}
                        {/* // 1.2.把根组件的state中的name 传参给子组件 CartTitle */}
                        <CartTitle name={this.state.name}></CartTitle>
                        <CartList></CartList>
                        <CatTotal list={this.state.list}></CatTotal>
                    </div>
                </div>
            </div>
        )
    }
}
