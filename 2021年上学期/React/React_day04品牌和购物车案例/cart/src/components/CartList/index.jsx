import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map(item=>(
                    <div class="item" key={item.id}>
                    <img src={item.img} />
                    <div class="name">{ item.name}</div>
                    <div class="change">
                        <a href="#！">－</a>
                        <input type="text" class="num" />
                        <a href="#！">＋</a>
                    </div>
                    <div class="del">×</div>
                </div>
                ))}
            
            </div>
        )
    }
}
