import React, { Component } from 'react'

export default class index extends Component {
    // state = {
    //     ids: '',
    //     names: ''
    // }
    handleAdd = () => {
        this.props.Add()
    }
    changevalue = (e) => {
        console.log(e.target.value);
        this.props.change(e)
    }
    render() {
        return (
            <div className="shopping-left">
                <input type="text" placeholder="输入编号" value={this.props.ids} name="ids" onChange={this.changevalue} />
                <input type="text" placeholder="输入名称" value={this.props.names} name="names" onChange={this.changevalue} />
                <button onClick={this.handleAdd}>添加数据</button>
                <hr />
            </div>
        )
    }
}
