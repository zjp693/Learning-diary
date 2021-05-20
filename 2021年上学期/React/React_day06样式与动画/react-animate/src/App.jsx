import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css"
export default class App extends Component {
  state = {
    heroList: [
      { id: 0, name: "李元芳" },
      { id: 1, name: "小乔" },
      { id: 2, name: "吕布" },
    ]
  }
  delHero = (id) => {
    console.log(id);
    let list = this.state.heroList.filter(item => item.id !== id)
    console.log(list);
    this.setState({
      heroList: list
    })
  }
  addHero = () => {
    this.setState({
      heroList: [...this.state.heroList, { id: this.state.heroList.length, name: "澜" + (this.state.heroList.length) }]
    })
  }
  render() {
    return (
      <div className="APP">
        <ul>
          <TransitionGroup >
            {
              this.state.heroList.map(item => (
                <CSSTransition key={item.id} classNames="list" timeout={1000}>
                  <li onClick={() => this.delHero(item.id)}>{item.name}</li>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </ul>
        <button onClick={this.addHero}>增加</button>
      </div>
    )
  }
}
