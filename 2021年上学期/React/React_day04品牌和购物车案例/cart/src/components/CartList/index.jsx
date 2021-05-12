import React, { Component } from 'react'

export default class CartList extends Component {
   
// 4.2 在事件的处理函数中,调用父组件传给CartList的方法，并把参数传给这个方法
    handleDel = (id) => {
        // console.log(id);
        this.props.delItem(id)
    }
    // 5.2.在input中声明OnChange事件
    handleChange = (id,e) => {
    //    console.log(id,e);
    // 5.4 给父组件传1.type 2.id 3.num
        this.props.changeItem({
            type: "change",
            id: id,
            num:e.target.value
        })
    }
    // 添加数量
    handleAdd = (id) => {
        // console.log(id);
        this.props.changeItem({
            type: "add",
            id: id,
        })
    }
      // 减少数量
        handleBcak = (id) => {
        // console.log(id);
        this.props.changeItem({
            type: "back",
            id: id,
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.list.map(item=>(
                    <div className="item" key={item.id}>
                    <img src={item.img}  alt=""/>
                    <div className="name">{ item.name}</div>
                    <div className="change">
                        <a href="#！" onClick={()=>this.handleBcak(item.id)}>－</a>
                                <input type="text" className="num" value={item.num} onChange={ (e)=>this.handleChange(item.id,e)}/>
                        <a href="#！" onClick={(e)=>this.handleAdd(item.id,e)}>＋</a>
                            </div> 
                            {/* 4.1 在CartList组件中 给删除按钮绑定事件(事件传参) */}
                            {/* 5.1.渲染list中的商品数量 */}
                    <div className="del" onClick={()=>this.handleDel(item.id)}>×</div>
                </div>
                    ))
                }
            
            </div>
        )
    }
}
