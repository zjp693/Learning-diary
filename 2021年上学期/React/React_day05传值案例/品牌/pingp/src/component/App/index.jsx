import React, { Component } from 'react'
import Froms from "../from"
import Table from "../table"
export default class index extends Component {
    // 设置默认值
    state = {
        names: '',
        ids: "",
        list: [{ id: 0, name: "宝马", date: "2020/08/11 10:20:01" }]
    }

    changevalue = (e) => {
        console.log(e.target.value);
        this.setState({

            [e.target.name]: e.target.value
        })
    }

    // 添加
    handleAdd = () => {
        if (this.state.names.trim().length === 0 || this.state.ids.trim().length === 0) return
        const { list, ids, names } = this.state
        this.setState({
            list: [...list, { id: ids, name: names, date: new Date().toLocaleString('cn-GB', { hour12: false }) }],

        })

    }
    handleDel = (id) => {
        console.log(id);

        const lists = this.state.list.filter(item => item.id !== id)
        console.log(this.state.list);
        this.setState({
            list: lists
        })
    }
    render() {
        return (
            <div id="app">
                <Table Add={this.handleAdd} change={this.changevalue} ></Table>
                <Froms msg={this.state.list} del={this.handleDel} ></Froms>
            </div >
        )
    }
}
