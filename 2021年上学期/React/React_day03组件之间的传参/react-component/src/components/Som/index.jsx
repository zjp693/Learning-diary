import React, { Component } from 'react'

export default class ComSom extends Component {
    static defaultProps = {
        son:"子组件的值"
    }

    render() {
        return (
            <div className="son">
                {/*  */}
                <h3>我是子组件（{ this.props.son}）</h3>
            </div>
        )
    }
}


