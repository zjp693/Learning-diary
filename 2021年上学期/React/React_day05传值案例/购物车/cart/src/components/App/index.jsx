import React, { Component } from "react";

export default class index extends Component {
  // 设置默认值
  state = {
    checked: false,
    total: 0,
    list: [
      { id: 0, name: "牛奶", src: "/uploads/01.jpg", price: 10, count: 3, falg: false },
      { id: 1, name: "三只松鼠", src: "/uploads/02.jpg", price: 30, count: 1, falg: false },
      { id: 2, name: "蓝牙播放器", src: "/uploads/03.jpg", price: 100, count: 1, falg: false },
      { id: 3, name: "大米", src: "/uploads/04.jpg", price: 50, count: 3, falg: false },
      { id: 4, name: "罐头", src: "/uploads/05.jpg", price: 20, count: 2, falg: false },
      { id: 5, name: "路由器", src: "/uploads/06.jpg", price: 300, count: 1, falg: false }
    ]
  }
  //删除
  handlerDel = (id) => {
    const list = this.state.list.filter(item => item.id !== id)
    this.setState({
      list: list
    })
  }
  // 全选
  handlerResult = () => {
    let { list } = this.state
    list.forEach(item => item.falg = !this.state.checked)
    this.setState({
      checked: !this.state.checked,
      list: list
    })
  }
  // 选中
  handleCheck = (id) => {

    let { list } = this.state;

    let i = list.every(item => {
      if (item.id === id) {
        item.falg = !item.falg
      }
      if (item.falg === false) {
        this.setState({
          checked: false
        })
      }
      return item.falg === true
    })

    this.setState({
      list: list,
      checked: i
    })

    // ------------------------
    // list.forEach(item => {
    //   if (item.id === id) {
    //     item.falg = !item.falg
    //   }
    //   if (item.falg === false) {
    //     this.setState({
    //       checked: false
    //     })
    //   }
    // })
    // -------------------------------
    // if (count === list.length) {

    // } else {
    //   this.setState({
    //     checked: false
    //   })
    // }

    // console.log(count);

  }

  // 删除所选
  handleClear = () => {
    // console.log(1);
    let { list } = this.state;
    let lists = list.filter(item => item.falg === false)
    // console.log(lists);
    this.setState({
      list: lists
    })
  }
  Clear = () => {
    this.setState({
      list: []
    })
  }
  // 输入数量
  handlerchange = (id, e) => {
    // console.log(e.target.value);
    let { list } = this.state;
    let lists = list.map(item => {
      // console.log(item);
      if (item.id === id) {
        return { ...item, count: e.target.value < 0 ? 0 : e.target.value }
      }
      else {
        return item
      }
    })
    this.setState({
      list: lists
    })
  }
  // 点击数量加一
  handleAdd = (id) => {
    let { list } = this.state;
    let lists = list.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      }
      else {
        return item
      }
    })
    this.setState({
      list: lists
    })
  }
  // 点击数量减一
  handleBack = (id) => {
    let { list } = this.state
    let lists = list.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 < 0 ? 0 : item.count - 1 }
      } else {
        return item
      }
    })
    this.setState({
      list: lists
    })
  }

  // 结算
  handleTotal = () => {
    let sum = 0
    let count = 0
    let { list } = this.state
    list.forEach(item => {
      // console.log(item.falg);
      if (item.falg === true) {
        sum += item.count * item.price
        count += item.count
      }
    })

    return {
      count,
      sum
    }
  }

  render() {
    return (
      <div>
        <div className="car">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="all" onChange={() => this.handlerResult()} checked={this.state.checked} />
                  全选
                </th>
                <th>商品</th>
                <th>单价</th>
                <th>商品数量</th>
                <th>小计</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map(item => (
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" checked={item.falg} onChange={() => this.handleCheck(item.id)} />
                  </td>
                  <td>
                    <img src={item.src} alt="" />
                    <p>{item.name}</p>
                  </td>
                  <td>{item.price}￥</td>
                  <td>
                    <div className="count-c clearfix">
                      <a href="#!" className="reduce disabled" onClick={() => this.handleBack(item.id)}>
                        -
                    </a>
                      <input type="text" value={item.count} onChange={(e) => this.handlerchange(item.id, e)} />
                      <a href="#!" className="add" onClick={() => this.handleAdd(item.id)}>
                        +
                    </a>
                    </div>
                  </td>
                  <td>{item.price * item.count}￥</td>
                  <td>
                    <a href="#!" className="del" onClick={() => this.handlerDel(item.id)}>
                      删除
                  </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="controls clearfix">
            <a href="#!" className="del-all" onClick={() => this.handleClear()}>删除所选商品</a>
            <a href="#!" className="clear" onClick={() => this.Clear()}>清理购物车</a>
            <a href="#!" className="pay" >去结算</a>
            <p>
              已经选中<span id="totalCount">{this.handleTotal().count}</span>件商品;总价：<span id="totalPrice" className="total-price" >{this.handleTotal().sum}￥</span>
            </p>
          </div>
        </div>
        <div className="box">
          购物车空空如也
  </div>
      </div >

    );
  }
}
