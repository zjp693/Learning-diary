import React, { Component } from 'react'

export default class index extends Component {

    handleDel = (id) => {
        this.props.del(id)

    }

    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>品牌名称</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.msg.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td><a href="#!" onClick={() => this.handleDel(item.id)}>删除</a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
