import React, { Component } from 'react'
import  "./App.css"
export default class App extends Component {
// 功能：
// 1.添加品牌
// 1.1 定义初始化状态
// 1.2 把初始数据渲染出来
// 1.3 书写受控组件
// 1.4 获取数据
// 1.5 组织添加数据到数组
// 2.删除品牌(事件传参数)
// 2.1 事件传参方法  <div>{this.handleClick.bind(this, 参数1, 参数2，参数3)}</div>  <div>{onclick={(e) => this.deleteRow(id, e)}</div>
// 2.2 给删除按钮添加点击事件
// 2.3 声明点击事件的处理函数
// 2.4 遍历 替换数组
// 3.搜索品牌
// 3.1 书写受控组件
// 3.2 获取搜索结果的方法
// 3.3 返回数组对象中的name包含关键字的数组
  // -----------------------------------------------------------------
  // 1.添加品牌
// 1.1 定义初始化状态
state = {
  id: "",
  name: '',
  keywords: '',
  brandList: [
  { id: 1, name: '奔驰', ctime: '2020/9/23' },
  { id: 2, name: '宝马', ctime: '2020/9/21' },
  { id: 3, name: '长安奔奔', ctime: '2014/6/23' },
  { id: 4, name: '千里马', ctime: '2020/5/3' }
  ]
}

  // 监听数据变化 给state 赋值
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
    [e.target.name]:e.target.value
  })
  }
  
// 1.4获取输入的数据
  addBrand = () => {
    //1.5 组织添加数据到数组
    //解构 id 和 name
    const { id, name } = this.state;
    // 判断用户是否有输入数据
    if (id.trim().length === 0 || name.trim().length === 0) return alert("请输入编号或者品牌名称")
    // 把id和name组成数据列表对象所需要的结构，添加进去，清空id和name值
    this.setState({
      brandList: [...this.state.brandList, { id: id, name: name, ctime: new Date().toLocaleDateString() }],
      // 清空输入框
      id: '',
      name:''
    })
}



// 2.删除
  delBrand = (id) => {
    // 遍历数据  替换数据
    const list = this.state.brandList.filter((ele) => ele.id !== id)
    // 替换数据
    this.setState({
      brandList:list
    })
  }
  
// 搜索品牌
  searchResult = () => {
    console.log(this.state.brandList.filter(item=>item.name.includes(this.state.keywords)));
   return this.state.brandList.filter(item=>item.name.includes(this.state.keywords))
  }

  render() {
    return (
     <div id="app">
    {/* <!-- panel 面板 --> */}
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">添加品牌</h3>
      </div>
      <div className="panel-body">
        <div className="form-group form-inline">
          <div className="input-group">
                <div className="input-group-addon">编号</div>
                {/* 1.3 书写控件组件 */}
          <input type="text" className="form-control" value={this.state.id} name="id" onChange={ this.handleChange}/>
          </div>
          <div className="input-group">
                <div className="input-group-addon">品牌名称</div>
                      {/* 1.3 书写控件组件 */}
            <input type="text" className="form-control" value={this.state.name} name="name" onChange={ this.handleChange}/>
          </div>
          <div className="input-group">
                <button className="btn btn-primary" onClick={ this.addBrand}>添加</button>
          </div>
          <div className="input-group pull-right">
                <div className="input-group-addon">按名称搜索</div>
                {/* 1.3 书写控件组件 */}
            <input type="text" className="form-control"   value={this.state.keywords} name="keywords"  onChange={ this.handleChange}/>
          </div>
        </div>
        {/* <!-- 表格区域 --> */}
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>编号</th>
              <th>品牌名称</th>
              <th>添加时间</th>
              <th>操作</th>
            </tr>
          </thead>
              <tbody>
                {/* 1.2把 初始值的数据渲染出来 */}
                {
                    this.searchResult().map((item)=>(
                    <tr  key={item.id}>
               <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.ctime}</td>
              <td>
                <button href="#" onClick={this.delBrand.bind(this,item.id)}>删除</button>
              </td>
            </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>

  </div>
    )
  }
}
