import React, { Component } from 'react'
// 标题
import CartTitle from "../CartTitle";
// 结算
import CatTotal from "../CartTotal";
// 列表
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
  
// 4.3 在App组件中，定义一个删除商品的方法，把这个方法传递给子组件
  deleteItem=(id)=>{
    // console.log(id);
// 4.4 在删除商品的方法中,接收CartList传递过来的ID,通过iD筛选出没有被删除的商品，
    let list = this.state.list.filter(item => item.id !== id);
// 把list数据替换掉
    this.setState({
      list:list
    })
  }
  //#region  输入框的值
  changeItem = (option) => {
  console.log(option);
    let { list } = this.state
    // 判断是输入的方式
    if (option.type === "change") {
      this.setState({
        // 
        list: list.map(item => {
          // 找到被传过来的id
          if (item.id === option.id) {
            return {...item,num:option.num<0?0:option.num}
          } else {
           return item
          }
        })
      })
    } else if (option.type === "add") {
      this.setState({
        // 
        list: list.map(item => {
          console.log(item);
          // 找到被传过来的id
          if (item.id === option.id) {
            return {...item,num:item.num+1<0?0:item.num+1}
          } else {
           return item
          }
        })
      })
    }
     else if (option.type === "back") {
      this.setState({
        // 
        list: list.map(item => {
          // 找到被传过来的id
          if (item.id === option.id) {
            return {...item,num:item.num-1<0?0:item.num-1}
          } else {
           return item
          }
        })
      })
    }
    
}
  //#endregion

    render() {
        return (
            <div id="app">
                <div className="container">
                    <div className="cart">
                        {/* <!-- title --> */}
                        {/* // 1.3.渲染name */}
                        {/* // 1.2.把根组件的state中的name 传参给子组件 CartTitle */}
                        <CartTitle name={this.state.name}></CartTitle>
                <CartList list={this.state.list} delItem={this.deleteItem} changeItem={this.changeItem}></CartList>
                        {/* // 2.2.把list数据传递给CartTotal组件 */}
                
                        <CatTotal list={this.state.list}></CatTotal>
                    </div>
                </div>
            </div>
        )
    }
}
