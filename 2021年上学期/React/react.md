## 1. 什么是React?

- React 是一个用于构建用户界面的JavaScript库 核心专注于视图,目的实现组件化开发

## 2. 组件化的概念

- 我们可以很直观的将一个复杂的页面分割成若干个独立组件,每个组件包含自己的逻辑和样式 再将这些独立组件组合完成一个复杂的页面。 这样既减少了逻辑复杂度，又实现了代码的重用
  - 可组合：一个组件可以和其他的组件一起使用或者可以直接嵌套在另一个组件内部
  - 可重用：每个组件都是具有独立功能的，它可以被使用在多个场景中
  - 可维护：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护

## 3.搭建React开发环境

```js
cnpm i create-react-app -g
create-react-app zhufeng2020react
cd zhufeng2020react
npm start
```

## 4.JSX

### 4.1 什么是JSX

- 是一种JS和HTML混合的语法,将组件的结构、数据甚至样式都聚合在一起定义组件

```js
ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementById('root')
);
```

### 4.2 什么是元素

- JSX其实只是一种语法糖,最终会通过[babeljs](https://www.babeljs.cn/repl)转译成`createElement`语法
- React元素是构成`React`应用的最小单位
- React元素用来描述你在屏幕上看到的内容
- React元素事实上是普通的JS对象,ReactDOM来确保浏览器中的DOM数据和React元素保持一致

```js
<h1 className="title" style={{color:'red'}}>hello</h1>
React.createElement("h1", {
  className: "title",
  style: {
    color: 'red'
  }
}, "hello");
```

createElement的结果

```js
{
  type:'h1',
  props:{
    className: "title",
    style: {
      color: 'red'
    }
  },
  children:"hello"
}
```

### 4.3 JSX表达式

- 可以任意地在 JSX 当中使用 JavaScript 表达式，在 JSX 当中的表达式要包含在大括号里

```js
import React from 'react';
import ReactDOM from 'react-dom';
let title = 'hello';
let root = document.getElementById('root');
ReactDOM.render(
    <h1>{title}</h1>,
    root
);
```

### 4.4 JSX属性

- 需要注意的是JSX并不是`HTML`,更像`JavaScript`
- 在JSX中属性不能包含关键字，像`class`需要写成`className`,`for`需要写成`htmlFor`,并且属性名需要采用驼峰命名法

```js
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <h1 className="title" style={{ color: 'red' }}>Hello</h1>,
    document.getElementById('root')
);
```

### 4.5 JSX也是对象

- 可以在`if`或者 `for`语句里使用`JSX`
- 将它赋值给变量，当作参数传入，作为返回值都可以

if中使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');
function greeting(name) {
    if (name) {
        return <h1>Hello, {name}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const element = greeting('zhufeng');
ReactDOM.render(
    element,
    root
);
```

for中使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');
let names = ['张三', '李四', '王五'];
let elements = [];
for (let i = 0; i < names.length; i++) {
    elements.push(<li>{names[i]}</li>);
}
ReactDOM.render(
    <ul>
        {elements}
    </ul>,
    root
);
```

### 4.6 更新元素渲染

- React 元素都是`immutable`不可变的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子
- 更新界面的唯一办法是创建一个新的元素，然后将它传入`ReactDOM.render()`方法

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');
function tick() {
    const element = (
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
    ReactDOM.render(element, root);
}
setInterval(tick, 1000);
```

### 4.7 React只会更新必要的部分

- React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。
- 即便我们每秒都创建了一个描述整个UI树的新元素，React DOM 也只会更新渲染文本节点中发生变化的内容

## 5. 组件 & Props

- 可以将UI切分成一些独立的、可复用的部件，这样你就只需专注于构建每一个单独的部件
- 组件从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素

### 5.1 函数(定义的)组件

- 函数组件接收一个单一的`props`对象并返回了一个React元素

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');

function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(<Welcome name="zhufeng"/>, root);
```

### 5.2 类(定义的)组件

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');

class Welcome extends React.Component {
  render(){
      return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(<Welcome name="zhufeng"/>, root);
```

### 5.3 组件渲染

- React元素不但可以是DOM标签，还可以是用户自定义的组件
- 当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为 `props`
- 组件名称必须以大写字母开头
- 组件必须在使用的时候定义或引用它
- 组件的返回值只能有一个根元素

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
class Welcome2 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const element1= <Welcome name="zhufeng" />;
console.log(element1.props.name);
const element2= <Welcome2 name="zhufeng" />;
console.log(element1.props.name);

ReactDOM.render(
    <div>{element1}{element2}</div>,
    root
);
```

## 6. 状态

- 组件的数据来源有两个地方，分别是属性对象和状态对象
- 属性是父组件传递过来的(默认属性，属性校验)
- 状态是自己内部的,改变状态唯一的方式就是`setState`
- 属性和状态的变化都会影响视图更新

```js
import React from 'react';
import ReactDOM from 'react-dom';
interface Props {

}
interface State {
    date: any
}
class Clock extends React.Component<Props, State>{
    timerID
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
```

### 6.1 不要直接修改 State

- 构造函数是唯一可以给 `this.state` 赋值的地方

```js
import React from 'react';
import ReactDOM from 'react-dom';
interface Props {
}
interface State {
    number: number
}
class Counter extends React.Component<Props, State> {
    timerID
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({ number: this.state.number + 1 });
                //this.state.number = this.state.number + 1;
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div >
                <p> {this.state.number} </p>
            </div>
        );
    }
}

ReactDOM.render(<
    Counter />,
    document.getElementById('root')
);
```

### 6.2 State 的更新可能是异步的

- 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用
- 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
- 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    handleClick = () => {
        //this.setState({number:this.state.number+1});
        //console.log(this.state.number);
        //this.setState({number:this.state.number+1});

        this.setState((state) => (
            { number: state.number + 1 }
        ));
        this.setState((state) => (
            { number: state.number + 1 }
        ));
    }
    render() {
        return (
            <div >
                <p> {this.state.number} </p>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

ReactDOM.render(<
    Counter />,
    document.getElementById('root')
);
```

### 6.3 State 的更新会被合并

- 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zhufeng',
            number: 0
        };
    }
    handleClick = () => {
        //this.setState({number:this.state.number+1});
        //console.log(this.state.number);
        //this.setState({number:this.state.number+1});

        this.setState((state) => (
            { number: state.number + 1 }
        ));
        this.setState((state) => (
            { number: state.number + 1 }
        ));
    }
    render() {
        return (
            <div >
                <p>{this.state.name}: {this.state.number} </p>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

ReactDOM.render(<
    Counter />,
    document.getElementById('root')
);
```

## 7. 事件处理

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
- 你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用`preventDefault`

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Link extends React.Component {
    handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
    }

    render() {
        return (
            <a href="http://www.baidu.com" onClick={this.handleClick}>
                Click me
          </a>
        );
    }
}

ReactDOM.render(
    <Link />,
    document.getElementById('root')
);
```

### 7.2 this

- 你必须谨慎对待 JSX 回调函数中的 this,可以使用:
  - 公共属性(箭头函数)
  - 匿名函数
  - bind进行绑定

```js
class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }
    handleClick1 = () => {
        console.log('this is:', this);
    }
    render() {
        //onClick={this.handleClick.bind(this)
        return (
            <button onClick={(event) => this.handleClick(event)}>
                Click me
        </button>
        );
    }
}
```

### 7.3 向事件处理程序传递参数

- 匿名函数
- bind

```js
import React from 'react';
import ReactDOM from 'react-dom';
class LoggingButton extends React.Component {
    handleClick = (id, event) => {
        console.log('id:', id);
    }
    render() {
        return (
            <>
                <button onClick={(event) => this.handleClick('1', event)}>
                    Click me
            </button>
                <button onClick={this.handleClick.bind(this, '1')}>
                    Click me
            </button>
            </>
        );
    }
}
ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
);
```

### 7.4 Ref

- Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素
- 在 React 渲染生命周期时，表单元素上的 value 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个 defaultValue 属性，而不是 `value`

#### 7.4.1 为 DOM 元素添加 ref

- 可以使用 ref 去存储 DOM 节点的引用
- 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Sum extends React.Component {
    a
    b
    result
    constructor(props) {
        super(props);
        this.a = React.createRef();
        this.b = React.createRef();
        this.result = React.createRef();
    }
    handleAdd = () => {
        let a = this.a.current.value;
        let b = this.b.current.value;
        this.result.current.value = a + b;
    }
    render() {
        return (
            <>
                <input ref={this.a} />+<input ref={this.b} /><button onClick={this.handleAdd}>=</button><input ref={this.result} />
            </>
        );
    }
}
ReactDOM.render(
    <Sum />,
    document.getElementById('root')
);
```

#### 7.4.2 为 class 组件添加 Ref

- 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component {
    input
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        this.input.current.getFocus();
    }
    render() {
        return (
            <>
                <TextInput ref={this.input} />
                <button onClick={this.getFocus}>获得焦点</button>
            </>
        );
    }
}
class TextInput extends React.Component {
    input
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        this.input.current.focus();
    }
    render() {
        return <input ref={this.input} />
    }
}
ReactDOM.render(
    <Form />,
    document.getElementById('root')
);
```

#### 7.4.3 Ref转发

- 你不能在函数组件上使用 ref 属性，因为他们没有实例

- Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧

- Ref 转发允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件

  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  class Form extends React.Component {
    input
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        this.input.current.getFocus();
    }
    render() {
        return (
            <>
                <TextInput ref={this.input} />
                <button onClick={this.getFocus}>获得焦点</button>
            </>
        );
    }
  }
  //Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  function TextInput() {
    return <input />
  }
  ReactDOM.render(
    <Form />,
    document.getElementById('root')
  );
  ```

使用forwardRef

```js
import React from 'react';
import ReactDOM from 'react-dom';
interface InputProps { }
const TextInput = React.forwardRef((props, ref) => (
    <input ref={ref} />
));
class Form extends React.Component {
    input
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    getFocus = () => {
        console.log(this.input.current);

        this.input.current.focus();
    }
    render() {
        return (
            <>
                <TextInput ref={this.input} />
                <button onClick={this.getFocus}>获得焦点</button>
            </>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
);
```

## 8.生命周期

### 8.1 旧版生命周期

![react15](http://img.zhufengpeixun.cn/react15.jpg)

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{ // 他会比较两个状态相等就不会刷新视图 PureComponent是浅比较
    static defaultProps = {
        name: '珠峰架构'
    };
    constructor(props) {
        super(props);
        this.state = { number: 0 }
        console.log('1.constructor构造函数')
    }
    componentWillMount() { // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次
        console.log('2.组件将要加载 componentWillMount');
    }
    componentDidMount() {
        console.log('4.组件挂载完成 componentDidMount');
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 });
    };
    // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
    shouldComponentUpdate(nextProps, nextState) { // 代表的是下一次的属性 和 下一次的状态
        console.log('5.组件是否更新 shouldComponentUpdate');
        return nextState.number % 2 == 0;
        // return nextState.number!==this.state.number; //如果此函数种返回了false 就不会调用render方法了
    } //不要随便用setState 可能会死循环
    componentWillUpdate() {
        console.log('6.组件将要更新 componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('7.组件完成更新 componentDidUpdate');
    }
    render() {
        console.log('3.render');
        return (
            <div>
                <p>{this.state.number}</p>
                {this.state.number > 3 ? null : <ChildCounter n={this.state.number} />}
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
class ChildCounter extends Component {
    componentWillUnmount() {
        console.log('组件将要卸载componentWillUnmount')
    }
    componentWillMount() {
        console.log('child componentWillMount')
    }
    render() {
        console.log('child-render')
        return (<div>
            {this.props.n}
        </div>)
    }
    componentDidMount() {
        console.log('child componentDidMount')
    }
    componentWillReceiveProps(newProps) { // 第一次不会执行，之后属性更新时才会执行
        console.log('child componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.n % 3 == 0; //子组件判断接收的属性 是否满足更新条件 为true则更新
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
// defaultProps
// constructor
// componentWillMount
// render
// componentDidMount
// 状态更新会触发的
// shouldComponentUpdate nextProps,nextState=>boolean
// componentWillUpdate
// componentDidUpdate
// 属性更新
// componentWillReceiveProps newProps
// 卸载
// componentWillUnmount
```

### 8.2 新版生命周期

![react16](images/react16.jpg)

#### 8.2.1 getDerivedStateFromProps

- static getDerivedStateFromProps(props, state) 这个生命周期的功能实际上就是将传入的props映射到state上面

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
    static defaultProps = {
        name: '珠峰架构'
    };
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }

    handleClick = () => {
        this.setState({ number: this.state.number + 1 });
    };

    render() {
        console.log('3.render');
        return (
            <div>
                <p>{this.state.number}</p>
                <ChildCounter number={this.state.number} />
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
class ChildCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { number } = nextProps;
        // 当传入的type发生变化的时候，更新state
        if (number % 2 === 0) {
            return { number: number * 2 };
        } else {
            return { number: number * 3 };
        }
    }
    render() {
        console.log('child-render', this.state)
        return (<div>
            {this.state.number}
        </div>)
    }

}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);
```

#### 8.2.2 getSnapshotBeforeUpdate

- getSnapshotBeforeUpdate() 被调用于render之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给componentDidUpdate()

```js
import React from './react';
import ReactDOM from './react-dom';
class ScrollingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] }
        this.wrapper = React.createRef();
    }

    addMessage() {
        this.setState(state => ({
            messages: [`${state.messages.length}`, ...state.messages],
        }))
    }
    componentDidMount() {
        this.timeID = window.setInterval(() => {//设置定时器
            this.addMessage();
        }, 1000)
    }
    componentWillUnmount() {//清除定时器
        window.clearInterval(this.timeID);
    }
    getSnapshotBeforeUpdate() {//很关键的，我们获取当前rootNode的scrollHeight，传到componentDidUpdate 的参数perScrollHeight
        return {prevScrollTop:this.wrapper.current.scrollTop,prevScrollHeight:this.wrapper.current.scrollHeight};
    }
    componentDidUpdate(pervProps, pervState, {prevScrollHeight,prevScrollTop}) {
        //当前向上卷去的高度加上增加的内容高度
        this.wrapper.current.scrollTop = prevScrollTop + (this.wrapper.current.scrollHeight - prevScrollHeight);
    }
    render() {
        let style = {
            height: '100px',
            width: '200px',
            border: '1px solid red',
            overflow: 'auto'
        }
        //<div key={index}>里不要加空格!
        return (
            <div style={style} ref={this.wrapper} >
                {this.state.messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <ScrollingList />,
    document.getElementById('root')
);
```

## 9.Context(上下文)

- 在某些场景下，你想在整个组件树中传递数据，但却不想手动地在每一层传递属性。你可以直接在 React 中使用强大的`context`API解决上述问题
- 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props

![contextapi](images/contextapi.gif)

### 9.1 使用

```js
import React, { Component } from './react';
import ReactDOM from './react-dom';
let ThemeContext = React.createContext(null);
let root = document.querySelector('#root');
class Header extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, padding: '5px' }}>
                            header
                          <Title />
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Title extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}` }}>
                            title
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Main extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, margin: '5px', padding: '5px' }}>
                            main
                        <Content />
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Content extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, padding: '5px' }}>
                            Content
                            <button onClick={() => value.changeColor('red')} style={{ color: 'red' }}>红色</button>
                            <button onClick={() => value.changeColor('green')} style={{ color: 'green' }}>绿色</button>
                        </div>
                    )
                }
            </ThemeContext.Consumer>

        )
    }
}

class Page extends Component{
    constructor(props) {
        super(props);
        this.state = { color: 'red' };
    }
    changeColor = (color) => {
        this.setState({ color });
    }
    render() {
        let contextVal = { changeColor: this.changeColor, color: this.state.color };
        return (
            <ThemeContext.Provider value={contextVal}>
                <div style={{ margin: '10px', border: `5px solid ${this.state.color}`, padding: '5px', width: 200 }}>
                    page
                    <Header />
                    <Main />
                </div>
            </ThemeContext.Provider>

        )
    }
}
ReactDOM.render(<Page />, root);
```

## 10. 高阶组件

- 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件
- 高阶组件的作用其实就是为了组件之间的代码复用

```js
const NewComponent = higherOrderComponent(OldComponent)
```

### 10.1 cra支持装饰器

#### 10.1.1 安装

```js
cnpm i react-app-rewired customize-cra @babel/plugin-proposal-decorators -D
```

#### 10.1.2 修改package.json

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  }
```

#### 10.1.3 config-overrides.js

```js
const {override,addBabelPlugin} = require('customize-cra');

module.exports = override(
  addBabelPlugin( [
    "@babel/plugin-proposal-decorators", { "legacy": true }
  ])
)
```

#### 10.1.4 jsconfig.json

```json
{
  "compilerOptions": {
     "experimentalDecorators": true
  }
}
```

### 10.2 属性代理

- 基于属性代理：操作组件的props

```js
import React from 'react';
import ReactDOM from 'react-dom';
const loading = message =>OldComponent =>{
    return class extends React.Component{
        render(){
            const state = {
                show:()=>{
                    let div = document.createElement('div');
                    div.innerHTML = `<p id="loading" style="position:absolute;top:100px;z-index:10;background-color:black">${message}</p>`;
                    document.body.appendChild(div);
                },
                hide:()=>{
                    document.getElementById('loading').remove();
                }
            }
            return  (
                <OldComponent {...this.props} {...state} {...{...this.props,...state}}/>
            )
        }
    }
}
@loading('正在加载中')
class Hello extends React.Component{
  render(){
     return <div>hello<button onClick={this.props.show}>show</button><button onClick={this.props.hide}>hide</button></div>;
  }
}
let LoadingHello  = loading('正在加载')(Hello);

ReactDOM.render(
    <LoadingHello/>, document.getElementById('root'));
```

### 10.3 反向继承

- 基于反向继承：拦截生命周期、state、渲染过程

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Button extends React.Component{
    state = {name:'张三'}
    componentDidMount(){
        console.log('Button componentDidMount');
    }
    render(){
        console.log('Button render');
        return <button name={this.state.name} title={this.props.title}/>
    }
}
const wrapper = OldComponent =>{
    return class NewComponent extends OldComponent{
        state = {number:0}
        componentWillMount(){
            console.log('WrapperButton componentWillMount');
             super.componentWillMount();
        }
        componentDidMount(){
            console.log('WrapperButton componentDidMount');
             super.componentDidMount();
        }
        handleClick = ()=>{
            this.setState({number:this.state.number+1});
        }
        render(){
            console.log('WrapperButton render');
            let renderElement = super.render();
            let newProps = {
                ...renderElement.props,
                ...this.state,
                onClick:this.handleClick
            }
            return  React.cloneElement(
                renderElement,
                newProps,
                this.state.number
            );
        }
    }
}
let WrappedButton = wrapper(Button);
ReactDOM.render(
    <WrappedButton title="标题"/>, document.getElementById('root'));
```

### 10.3 @修饰符

## 11. render props

- [render-props](https://zh-hans.reactjs.org/docs/render-props.html)
- `render prop` 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
- 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑
- render prop 是一个用于告知组件需要渲染什么内容的函数 prop
- 这也是逻辑复用的一种方式

### 11.1 原生实现

```js
import React from 'react';
import ReactDOM from 'react-dom';
class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                <h1>移动鼠标!</h1>
                <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}
ReactDOM.render(<MouseTracker />, document.getElementById('root'));
```

### 11.2 children

- children是一个渲染的方法

```js
import React from './react';
import ReactDOM from './react-dom';

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state)}
            </div>
        );
    }
}
ReactDOM.render(<MouseTracker >
    {
        (props) => (
            <div>
                <h1>移动鼠标!</h1>
                <p>当前的鼠标位置是 ({props.x}, {props.y})</p>
            </div>
        )
    }
</MouseTracker >, document.getElementById('root'));
```

### 11.3 render属性

```js
import React from 'react';
import ReactDOM from 'react-dom';
class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

ReactDOM.render(< MouseTracker render={params => (
    <>
        <h1>移动鼠标!</h1>
        <p>当前的鼠标位置是 ({params.x}, {params.y})</p>
    </>
)} />, document.getElementById('root'));
```

### 11.4 HOC

```js
import React from 'react';
import ReactDOM from 'react-dom';
function withTracker(OldComponent){
  return class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state = {x:0,y:0};
    }
    handleMouseMove = (event)=>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }
    render(){
        return (
            <div onMouseMove = {this.handleMouseMove}>
               <OldComponent {...this.state}/>
            </div>
        )
    }
 }
}
//render
function Show(props){
    return (
        <React.Fragment>
          <h1>请移动鼠标</h1>
          <p>当前鼠标的位置是: x:{props.x} y:{props.y}</p>
        </React.Fragment>
    )
}
let HighShow = withTracker(Show);
ReactDOM.render(
    <HighShow/>, document.getElementById('root'));
```

## 12. shouldComponentUpdate

- 当一个组件的props或state变更，React会将最新返回的元素与之前渲染的元素进行对比，以此决定是否有必要更新真实的 DOM，当它们不相同时 React 会更新该 DOM
- 如果渲染的组件非常多时可以通过覆盖生命周期方法 shouldComponentUpdate 来进行优化
- shouldComponentUpdate 方法会在重新渲染前被触发。其默认实现是返回 true,如果组件不需要更新，可以在shouldComponentUpdate中返回 false 来跳过整个渲染过程。其包括该组件的 render 调用以及之后的操作

### 12.1 PureComponent

```js
class PureComponent extends Component {
  shouldComponentUpdate(newProps,nextState) {
    return !shallowEqual(this.props, newProps)||!shallowEqual(this.state, nextState);
  }
}
function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 != "object" ||obj1 === null ||typeof obj2 != "object" ||obj2 === null) {
    return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
```

### 12.2 memo

```js
function memo(OldComponent){
  return class extends React.PureComponent{
    render(){
      return <OldComponent {...this.props}/>
    }
  }
}
```

## 1.创建项目

### 1.1 修改命令

```diff
  "scripts": {
+    "start": "set DISABLE_NEW_JSX_TRANSFORM=true&&react-scripts start",
+    "build": "set DISABLE_NEW_JSX_TRANSFORM=true&&react-scripts build",
+    "test": "set DISABLE_NEW_JSX_TRANSFORM=true&&react-scripts test",
+    "eject": "set DISABLE_NEW_JSX_TRANSFORM=true&&react-scripts eject"
  },
```

### 1.2 src\index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
let element1 = <div className="title" style={{ color: 'red' }}><span>hello</span>world</div>;
console.log(JSON.stringify(element1,null,2));
ReactDOM.render(element1, document.getElementById('root'));
{
    "type": "div",
    "props": {
        "className": "title",
        "style": {
            "color": "red"
        },
        "children": [
            {
                "type": "span",
                "props": {
                    "children": "hello"
                }
            },
            "world"
        ]
    }
}
```

### 1.3 public\index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
    <style>
      .title{
        background-color: green;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## 2.实现元素的渲染

![1609002145166](images/1609002145166)

### 2.1 src\index.js

```diff
+import React from './react';
+import ReactDOM from './react-dom';
let element1 = <div className="title" style={{ color: 'red' }}><span>hello</span>world</div>;
console.log(JSON.stringify(element1,null,2));
ReactDOM.render(element1, document.getElementById('root'));
```

### 2.2 src\react.js

```js
function createElement(type, config, children) {
    if(config){
        delete config.__source;
        delete config.__self;
    }
    let props = { ...config };
    if (arguments.length > 3) {
        children = Array.prototype.slice.call(arguments, 2);
    }
    props.children = children;
    return {
        type,
        props
    };
}
const React = {
    createElement
};
export default React;
```

### 2.3 react-dom.js

src\react-dom.js

```js
function render(vdom,container){
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
export function createDOM(vdom){
    if(typeof vdom === 'string' || typeof vdom ==='number'){
        return document.createTextNode(vdom);
    }
    let {type,props} = vdom;
    let dom = document.createElement(type);
    updateProps(dom,props);//更新属性
    if(typeof props.children === 'string' || typeof props.children ==='number' ){
        dom.textContent = props.children;
    }else if(typeof props.children=='object' && props.children.type){
        render(props.children,dom);
    }else if(Array.isArray(props.children)){//是数组的话
        reconcileChildren(props.children,dom);
    }else{
        dom.textContent = props.children?props.children.toString():'';
    }
    vdom.dom=dom;
    return dom;
}
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children'){continue;}
        if(key === 'style'){
            let style = props[key];
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
        }else{
            dom[key]=props[key];
        }
    }
}
function reconcileChildren(childrenVdom,parentDOM){
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom,parentDOM);
    }
}
const ReactDOM =  {
    render
};
export default ReactDOM;
```

## 3.函数组件渲染

![1609002319803](https://img.zhufengpeixun.com/1609002319803)

### 3.1 src\index.js

```diff
import React from './react';
import ReactDOM from './react-dom';
+function FunctionComponent(props){
+  return <div className="title" style={{ color: 'red' }}><span>{props.name}</span>{props.children}</div>;
+}
+let element = <FunctionComponent name="hello">world</FunctionComponent>;
ReactDOM.render(element, document.getElementById('root'));
```

### 3.2 react-dom.js

src\react-dom.js

```diff
function render(vdom,container){
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
function createDOM(vdom){
    if(typeof vdom === 'string' || typeof vdom ==='number'){
        return document.createTextNode(vdom);
    }
    let {type,props} = vdom;
+    let dom;
+    if(typeof type === 'function'){
+        return  mountFunctionComponent(vdom);
+    }else{
+        dom = document.createElement(type);
+    }
    updateProps(dom,props);
    if(typeof props.children === 'string' || typeof props.children ==='number' ){
        dom.textContent = props.children;
    }else if(typeof props.children=='object' && props.children.type){
        render(props.children,dom);
    }else if(Array.isArray(props.children)){//是数组的话
        reconcileChildren(props.children,dom);
    }else{
        dom.textContent = props.children?props.children.toString():'';
    }
    vdom={...vdom,dom};
    return dom;
}
+function mountFunctionComponent(vdom) {
+    const {type, props} = vdom;
+    const renderVdom = type(props);
+    return createDOM(renderVdom);
+}
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children'){continue;}
        if(key === 'style'){
            let style = props[key];
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
        }else{
            dom[key]=props[key];
        }
    }
}
function reconcileChildren(childrenVdom,parentDOM){
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom,parentDOM);
    }
}
export default {
    render
}
```

## 4.类组件渲染

![1609002426742](images/1609002426742)

### 4.1 src\index.js

src\index.js

```diff
import React from './react';
import ReactDOM from './react-dom';
+class ClassComponent extends React.Component{
+    render(){
+        return <div className="title" style={{ color: 'red' }}><span>{this.props.name}</span>{this.props.children}</div>;
+    }
+}
+let element = <ClassComponent name="hello">world</ClassComponent>;
ReactDOM.render(element, document.getElementById('root'));
```

### 4.2 src\Component.js

src\Component.js

```js
class Component{
    static isReactComponent=true
    constructor(props){
        this.props = props;
    }
}
export default Component;
```

### 4.3 src\react.js

src\react.js

```diff
+import Component from './Component';
function createElement(type, config, children) {
    if(config){
        delete config.__source;
        delete config.__self;
    }
    let props = { ...config };
    if (arguments.length > 3) {
        children = Array.prototype.slice.call(arguments, 2);
    }
    props.children = children;
    return {
        type,
        props
    };
}


export default {
    createElement,
+    Component
};
```

### 4.3 src\react-dom.js

src\react-dom.js

```diff
function render(vdom,container){
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
function createDOM(vdom){
    if(typeof vdom === 'string' || typeof vdom ==='number'){
        return document.createTextNode(vdom);
    }
    let {type,props} = vdom;
    let dom;
    if(typeof type === 'function'){
+      if(type.isReactComponent){//说明这个type是一个类组件的虚拟DOM元素
+          return mountClassComponent(vdom);
+      } else{
+          return mountFunctionComponent(vdom);
+      }
    }else{
        dom = document.createElement(type);
    }
    updateProps(dom,props);
    if(typeof props.children === 'string' || typeof props.children ==='number' ){
        dom.textContent = props.children;
    }else if(typeof props.children=='object' && props.children.type){
        render(props.children,dom);
    }else if(Array.isArray(props.children)){//是数组的话
        reconcileChildren(props.children,dom);
    }else{
        dom.textContent = props.children?props.children.toString():'';
    }
    return dom;
}
function mountFunctionComponent(vdom) {
    const {type, props} = vdom;
    const renderVdom = type(props);
    return createDOM(renderVdom);
}
+function mountClassComponent(vdom){
+    const {type, props} = vdom;
+    const classInstance = new type(props);
+    const renderVdom = classInstance.render();
+    const dom = createDOM(renderVdom);
+    classInstance.dom = dom;
+    return dom;
+}
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children'){continue;}
        if(key === 'style'){
            let style = props[key];
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
        }else{
            dom[key]=props[key];
        }
    }
}
function reconcileChildren(childrenVdom,parentDOM){
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom,parentDOM);
    }
}
export default {
    render
}
```

## 5.组件更新

![1609002644954](https://img.zhufengpeixun.com/1609002644954)

### 5.1 src\index.js

```diff
import React from './react';
import ReactDOM from './react-dom';
+class Counter extends React.Component {
+    constructor(props) {
+        super(props);
+        this.state = { number: 0 };
+    }
+    handleClick = () => {
+        this.setState({ number: this.state.number + 1 });
+        console.log(this.state);
+
+    }
+    render() {
+        return (
+            <div>
+                <p>number:{this.state.number}</p>
+                <button onClick={this.handleClick}>+</button>
+            </div>
+        )
+    }
+}
+ReactDOM.render(<Counter title="计数器" />, document.getElementById('root'));
```

### 5.2 src\Component.js

src\Component.js

```diff
+import {createDOM} from './react-dom';
class Component {
    static isReactComponent = true
    constructor(props) {
        this.props = props;
+        this.state = {};
    }
+    setState(partialState) {
+        let {state} = this;
+        this.state = {...state,...partialState};
+        let newVdom= this.render();
+        mountClassComponent(this,newVdom);
+    }
}

+function mountClassComponent(classInstance,newVdom) {
+    let oldDOM = classInstance.dom;
+    let newDOM = createDOM(newVdom);
+    oldDOM.parentNode.replaceChild(newDOM, oldDOM);
+    classInstance.dom = newDOM;
+}
export default Component;
```

### 5.3 src\react-dom.js

src\react-dom.js

```diff
function render(vdom,container){
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
export function createDOM(vdom){
    if(typeof vdom === 'string' || typeof vdom ==='number'){
        return document.createTextNode(vdom);
    }
    let {type,props} = vdom;
    let dom;
    if(typeof type === 'function'){
        if(type.isReactComponent){
            return mountClassComponent(vdom);
        } else{
            return mountFunctionComponent(vdom);
        }
    }else{
        dom = document.createElement(type);
    }
    updateProps(dom,props);
    if(typeof props.children === 'string' || typeof props.children ==='number' ){
        dom.textContent = props.children;
    }else if(typeof props.children=='object' && props.children.type){
        render(props.children,dom);
    }else if(Array.isArray(props.children)){//是数组的话
        reconcileChildren(props.children,dom);
    }else{
        dom.textContent = props.children?props.children.toString():'';
    }
    vdom.dom = dom;  
    return dom;
}
function mountFunctionComponent(vdom) {
    const {type, props} = vdom;
    const renderVdom = type(props);
    return createDOM(renderVdom);
}
function mountClassComponent(vdom){
    const {type, props} = vdom;
    const classInstance = new type(props);
    const renderVdom = classInstance.render();
    const dom = createDOM(renderVdom);
    classInstance.dom = dom;
    return dom;
}
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children'){continue;}
        if(key === 'style'){
            let style = props[key];
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
+        }else if(key.startsWith('on')){
+            dom[key.toLocaleLowerCase()]=props[key];
        }else{
            dom[key]=props[key];
        }
    }
}
function reconcileChildren(childrenVdom,parentDOM){
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom,parentDOM);
    }
}

export default {
    render
}
```

## 6.合成事件和批量更新

![setState2](images/setState2.jpg)

### 6.1 src\index.js

```diff
import React from './react';
import ReactDOM from './react-dom';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
+   handleClick = () => {
+        this.setState({ number: this.state.number + 1 });
+        console.log(this.state);
+        this.setState({ number: this.state.number + 1 });
+        console.log(this.state);
+        setTimeout(()=>{
+            this.setState({ number: this.state.number + 1 });
+            console.log(this.state);
+        });
+   }
    render() {
        return (
            <div>
                <p>number:{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter title="计数器" />, document.getElementById('root'));
```

### 6.2 src\utils.js

src\utils.js

```js
export function isFunction(obj) {
    return typeof obj === 'function';
}
```

### 6.3 src\Component.js

src\Component.js

```diff
import {createDOM} from './react-dom';
+import {isFunction } from './utils';
+export let updateQueue = {
+    updaters: [],
+    isBatchingUpdate: false,
+    add(updater) {
+        this.updaters.push(updater);
+    },
+    batchUpdate() {
+        this.updaters.forEach(updater=>updater.updateComponent());
+        this.isBatchingUpdate = false;
+    }
+};
+class Updater {
+    constructor(classInstance) {
+        this.classInstance = classInstance;
+        this.pendingStates = [];
+    }
+    addState(partialState) {
+        this.pendingStates.push(partialState);
+        updateQueue.isBatchingUpdate ? updateQueue.add(this) : this.updateComponent();
+    }
+    updateComponent() {
+        let { classInstance, pendingStates } = this;
+        if (pendingStates.length > 0) {
+            classInstance.state = this.getState();
+            classInstance.forceUpdate();
+        }
+    }
+    getState() {
+        let { classInstance, pendingStates } = this;
+        let { state } = classInstance;
+        if (pendingStates.length) {
+            pendingStates.forEach(nextState => {
+                if (isFunction(nextState)) {
+                    nextState = nextState.call(classInstance, state);
+                }
+                state = { ...state, ...nextState };
+            });
+            pendingStates.length = 0;
+        }
+        return state;
+    }
+}


class Component {
    static isReactComponent = true
    constructor(props) {
        this.props = props;
        this.state = {};
+        this.updater = new Updater(this);
    }
    setState(partialState) {
+        this.updater.addState(partialState);
    }
    forceUpdate(){
+        let newVdom= this.render();
+        mountClassComponent(this,newVdom);
    }
}

function mountClassComponent(classInstance,newVdom) {
    let oldDOM = classInstance.dom;
    let newDOM = createDOM(newVdom);
    oldDOM.parentNode.replaceChild(newDOM, oldDOM);
    classInstance.dom = newDOM;
}
export default Component;
```

### 6.4 src\event.js

src\event.js

```js
import {updateQueue} from './Component';
/**
 * 给哪个DOM元素绑定哪种类型的事件
 * @param {*} dom 给哪个DOM元素绑事件 button 真实DOM元素
 * @param {*} eventType 事件类型  onclick
 * @param {*} listener 事件处理函数 handleClick
 */
export function addEvent(dom,eventType,listener){
    //给dom增加一个store属性,值是一个空对象
    let store = dom.store || (dom.store={});
    store[eventType]=listener;//store.onclick=handleClick
    if(!document[eventType]){
        document[eventType]=dispatchEvent;//document.onclick=dispatchEvent
    }
}
let syntheticEvent ={};
function dispatchEvent(event){ //event是原生的DOM事件对象
   let {target,type}= event;//type=click target事件源button dom
   let eventType = `on${type}`;//onclick
   updateQueue.isBatchingUpdate=true;
   let syntheticEvent = createSyntheticEvent(event);
   while(target){
    let {store} = target;
    let listener = store && store[eventType];
    listener&&listener.call(target,syntheticEvent);
    target=target.parentNode;
   }
   for(let key in syntheticEvent){
    syntheticEvent[key]=null;
   }
   updateQueue.batchUpdate();
}
function createSyntheticEvent(nativeEvent){
  for(let key in nativeEvent){
    syntheticEvent[key]=nativeEvent[key];
  }
  return syntheticEvent;
}
```

### 6.5 src\react-dom.js

src\react-dom.js

```diff
+import { addEvent } from './event';
function render(vdom,container){
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
export function createDOM(vdom){
    if(typeof vdom === 'string' || typeof vdom ==='number'){
        return document.createTextNode(vdom);
    }
    let {type,props} = vdom;
    let dom;
    if(typeof type === 'function'){
        if(type.isReactComponent){
            return mountClassComponent(vdom);
        } else{
            return mountFunctionComponent(vdom);
        }
    }else{
        dom = document.createElement(type);
    }
    updateProps(dom,props);
    if(typeof props.children === 'string' || typeof props.children ==='number' ){
        dom.textContent = props.children;
    }else if(typeof props.children=='object' && props.children.type){
        render(props.children,dom);
    }else if(Array.isArray(props.children)){//是数组的话
        reconcileChildren(props.children,dom);
    }else{
        dom.textContent = props.children?props.children.toString():'';
    }
    vdom.dom = dom;  
    return dom;
}
function mountFunctionComponent(vdom) {
    const {type, props} = vdom;
    const renderVdom = type(props);
    return createDOM(renderVdom);
}
function mountClassComponent(vdom){
    const {type, props} = vdom;
    const classInstance = new type(props);
    const renderVdom = classInstance.render();
    const dom = createDOM(renderVdom);
    classInstance.dom = dom;
    return dom;
}
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children'){continue;}
        if(key === 'style'){
            let style = props[key];
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
        }else if(key.startsWith('on')){
+            addEvent(dom,key.toLocaleLowerCase(),props[key]);
        }else{
            dom[key]=props[key];
        }
    }
}
function reconcileChildren(childrenVdom,parentDOM){
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom,parentDOM);
    }
}

export default {
    render
}
```

## 7.ref

### 7.1 src\index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
class Sum extends React.Component {
    constructor(props) {
        super(props);
        this.a = React.createRef();
        this.b = React.createRef();
        this.result = React.createRef();
    }
    handleAdd = () => {
        let a = this.a.current.value;
        let b = this.b.current.value;
        this.result.current.value = a + b;
    }
    render() {
        return (
            <>
                <input ref={this.a} />+<input ref={this.b} /><button onClick={this.handleAdd}>=</button><input ref={this.result} />
            </>
        );
    }
}
ReactDOM.render(
    <Sum />,
    document.getElementById('root')
);
```

### 7.2 src\react.js

src\react.js

```diff
import Component from './Component';
function createElement(type, config, children) {
+   let ref;
    if (config) {
        delete config.__source;
        delete config.__self;
+       ref = config.ref;
    }
    let props = { ...config };
    if (arguments.length > 3) {
        children = Array.prototype.slice.call(arguments, 2);
    }
    props.children = children;
    return {
        type,
        props,
+       ref
    };
}
+function createRef(){
+    return {current:null};
+}
export default {
     createElement,
     Component,
+    createRef
};
```

### 7.3 src\react-dom.js

src\react-dom.js

```diff
import { addEvent } from './event';
function render(vdom,container){
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
export function createDOM(vdom){
    if(typeof vdom === 'string' || typeof vdom ==='number'){
        return document.createTextNode(vdom);
    }
+    let {type,props,ref} = vdom;
    let dom;
    if(typeof type === 'function'){
        if(type.isReactComponent){
            return mountClassComponent(vdom);
        } else{
            return mountFunctionComponent(vdom);
        }
    }else{
        dom = document.createElement(type);
    }
    updateProps(dom,props);
    if(typeof props.children === 'string' || typeof props.children ==='number' ){
        dom.textContent = props.children;
    }else if(typeof props.children=='object' && props.children.type){
        render(props.children,dom);
    }else if(Array.isArray(props.children)){//是数组的话
        reconcileChildren(props.children,dom);
    }else{
        dom.textContent = props.children?props.children.toString():'';
    }
    vdom.dom = dom;  
+    if(ref)
+        ref.current = dom;
    return dom;
}
function mountFunctionComponent(vdom) {
    const {type, props} = vdom;
    const renderVdom = type(props);
    return createDOM(renderVdom);
}
function mountClassComponent(vdom){
    const {type, props} = vdom;
    const classInstance = new type(props);
    const renderVdom = classInstance.render();
    const dom = createDOM(renderVdom);
    classInstance.dom = dom;
    return dom;
}
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children'){continue;}
        if(key === 'style'){
            let style = props[key];
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
        }else if(key.startsWith('on')){
            addEvent(dom,key.toLocaleLowerCase(),props[key]);
        }else{
            dom[key]=props[key];
        }
    }
}
function reconcileChildren(childrenVdom,parentDOM){
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom,parentDOM);
    }
}

export default {
    render
}
```

## 8.基本生命周期

### 8.1 src\index.js

```js
import React from './react';
import ReactDOM from './react-dom';
class Counter extends React.Component{ // 他会比较两个状态相等就不会刷新视图 PureComponent是浅比较
    static defaultProps = {
        name: '珠峰架构'
    };
    constructor(props) {
        super(props);
        this.state = { number: 0 }
        console.log('Counter 1.constructor')
    }
    componentWillMount() { // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次
        console.log('Counter 2.componentWillMount');
    }
    componentDidMount() {
        console.log('Counter 4.componentDidMount');
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 });
    };
    // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
    shouldComponentUpdate(nextProps, nextState) { // 代表的是下一次的属性 和 下一次的状态
        console.log('Counter 5.shouldComponentUpdate');
        return nextState.number % 2 === 0;
        // return nextState.number!==this.state.number; //如果此函数种返回了false 就不会调用render方法了
    } //不要随便用setState 可能会死循环
    componentWillUpdate() {
        console.log('Counter 6.componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('Counter 7.componentDidUpdate');
    }
    render() {
        console.log('Counter 3.render');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
Counter 1.constructor
Counter 2.componentWillMount
Counter 3.render
Counter 4.componentDidMount
2 Counter 5.shouldComponentUpdate
Counter 6.componentWillUpdate
Counter 3.render
Counter 7.componentDidUpdate
2 Counter 5.shouldComponentUpdate
Counter 6.componentWillUpdate
Counter 3.render
Counter 7.componentDidUpdate
```

### 8.2 src\Component.js

src\Component.js

```diff
import {createDOM} from './react-dom';
import {isFunction } from './utils';
export let updateQueue = {
    updaters: [],
    isBatchingUpdate: false,
    add(updater) {
        this.updaters.push(updater);
    },
    batchUpdate() {
        this.updaters.forEach(updater=>updater.updateComponent());
        this.isBatchingUpdate = false;
    }
};
class Updater {
    constructor(classInstance) {
        this.classInstance = classInstance;
        this.pendingStates = [];
        this.nextProps = null;
    }
    addState(partialState) {
        this.pendingStates.push(partialState);
+       this.emitUpdate();
    }
+    emitUpdate(){
+        !updateQueue.isBatchingUpdate
+        ? this.updateComponent()
+        : updateQueue.add(this);
+    }
+    updateComponent() {
+        let { classInstance, pendingStates } = this;
+        if (pendingStates.length > 0) {
+            shouldUpdate(
+                classInstance,
+                this.getState()
+            );
+        }
+    }
+    getState() {
+        let { classInstance, pendingStates } = this;
+        let { state } = classInstance;
+        if (pendingStates.length) {
+            pendingStates.forEach(nextState => {
+                if (isFunction(nextState)) {
+                    nextState = nextState.call(classInstance, state);
+                }
+                state = { ...state, ...nextState };
+            });
+            pendingStates.length = 0;
+        }
+        return state;
+    }
}

+function shouldUpdate(classInstance, nextState) {
+    let noUpdate = classInstance.shouldComponentUpdate && !classInstance.shouldComponentUpdate(classInstance.props, nextState);
+    classInstance.state = nextState;
+    if(!noUpdate){
+       classInstance.forceUpdate();
+    }
}


class Component {
    static isReactComponent = true
    constructor(props) {
        this.props = props;
        this.state = {};
        this.updater = new Updater(this);
    }
    setState(partialState) {
        this.updater.addState(partialState);
    }
+    forceUpdate(){
+        if(this.componentWillUpdate)
+            this.componentWillUpdate();    
+        let newRenderVdom= this.render();
+        let oldDOM = this.dom;
+        let newDOM = createDOM(newRenderVdom);
+        oldDOM.parentNode.replaceChild(newDOM, oldDOM);
+        if(this.componentDidUpdate)
+            this.componentDidUpdate(this.props,this.state);
+    }
+}
+export default Component;
```

### 8.3 src\react-dom.js

src\react-dom.js

```diff
import { addEvent } from './event';
function render(vdom,container){
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
export function createDOM(vdom){
    if(typeof vdom === 'string' || typeof vdom ==='number'){
        return document.createTextNode(vdom);
    }
    let {type,props,ref} = vdom;
    let dom;
    if(typeof type === 'function'){
        if(type.isReactComponent){
            return mountClassComponent(vdom);
        } else{
            return mountFunctionComponent(vdom);
        }
    }else{
        dom = document.createElement(type);
    }
    updateProps(dom,props);
    if(typeof props.children === 'string' || typeof props.children ==='number' ){
        dom.textContent = props.children;
    }else if(typeof props.children=='object' && props.children.type){
        render(props.children,dom);
    }else if(Array.isArray(props.children)){//是数组的话
        reconcileChildren(props.children,dom);
    }else{
        dom.textContent = props.children?props.children.toString():'';
    }
    vdom.dom = dom;  
    if(ref)
        ref.current = dom;
    return dom;
}
function mountFunctionComponent(vdom) {
    const {type, props} = vdom;
    const renderVdom = type(props);
    return createDOM(renderVdom);
}
function mountClassComponent(vdom){
    const {type, props} = vdom;
    const classInstance = new type(props);
+    if(classInstance.componentWillMount)
+       classInstance.componentWillMount();
    const renderVdom = classInstance.render();
    const dom = createDOM(renderVdom);
    classInstance.dom = dom;
+    if(classInstance.componentDidMount)
+       classInstance.componentDidMount();
    return dom;
}
function updateProps(dom,props){
    for(let key in props){
        if(key === 'children'){continue;}
        if(key === 'style'){
            let style = props[key];
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
        }else if(key.startsWith('on')){
            addEvent(dom,key.toLocaleLowerCase(),props[key]);
        }else{
            dom[key]=props[key];
        }
    }
}
function reconcileChildren(childrenVdom,parentDOM){
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom,parentDOM);
    }
}

export default {
    render
}
```

## 9.子组件生命周期

### 9.1 src\index.js

```js
import React from './react';
import ReactDOM from './react-dom';
class Counter extends React.Component{ // 他会比较两个状态相等就不会刷新视图 PureComponent是浅比较
    static defaultProps = {
        name: '珠峰架构'
    };
    constructor(props) {
        super(props);
        this.state = { number: 0 }
        console.log('Counter 1.constructor')
    }
    componentWillMount() { // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次
        console.log('Counter 2.componentWillMount');
    }
    componentDidMount() {
        console.log('Counter 4.componentDidMount');
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 });
    };
    // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
    shouldComponentUpdate(nextProps, nextState) { // 代表的是下一次的属性 和 下一次的状态
        console.log('Counter 5.shouldComponentUpdate');
        return nextState.number % 2 === 0;
        // return nextState.number!==this.state.number; //如果此函数种返回了false 就不会调用render方法了
    } //不要随便用setState 可能会死循环
    componentWillUpdate() {
        console.log('Counter 6.componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('Counter 7.componentDidUpdate');
    }
    render() {
        console.log('Counter 3.render');
        return (
            <div>
                <p>{this.state.number}</p>
                {this.state.number === 4 ? null : <ChildCounter count={this.state.number} />}
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
class ChildCounter extends React.Component {
    componentWillUnmount() {
        console.log(' ChildCounter 5.componentWillUnmount')
    }
    componentWillMount() {
        console.log('ChildCounter 1.componentWillMount')
    }
    render() {
        console.log('ChildCounter 2.render')
        return (<div>
            {this.props.count}
        </div>)
    }
    componentDidMount() {
        console.log('ChildCounter 3.componentDidMount')
    }
    componentWillReceiveProps(newProps) { // 第一次不会执行，之后属性更新时才会执行
        console.log('ChildCounter 4.componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.n % 3 === 0; //子组件判断接收的属性 是否满足更新条件 为true则更新
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
Counter 1.constructor
Counter 2.componentWillMount
Counter 3.render
ChildCounter 1.componentWillMount
ChildCounter 2.render
ChildCounter 3.componentDidMount
Counter 4.componentDidMount
2 Counter 5.shouldComponentUpdate
Counter 6.componentWillUpdate
Counter 3.render
ChildCounter 4.componentWillReceiveProps
Counter 7.componentDidUpdate
2 Counter 5.shouldComponentUpdate
Counter 6.componentWillUpdate
Counter 3.render
ChildCounter 5.componentWillUnmount
Counter 7.componentDidUpdate
2 Counter 5.shouldComponentUpdate
Counter 6.componentWillUpdate
Counter 3.render
ChildCounter 1.componentWillMount
ChildCounter 2.render
ChildCounter 3.componentDidMount
Counter 7.componentDidUpdate
```

![counterdomdiff.jpg](https://img.zhufengpeixun.com/counterdomdiff.jpg)

### 9.2 src\Component.js

src\Component.js

```diff
+import {compareTwoVdom} from './react-dom';
import {isFunction } from './utils';
export let updateQueue = {
    updaters: [],
    isBatchingUpdate: false,
    add(updater) {
        this.updaters.push(updater);
    },
    batchUpdate() {
        this.updaters.forEach(updater=>updater.updateComponent());
        this.isBatchingUpdate = false;
    }
};
class Updater {
    constructor(classInstance) {
        this.classInstance = classInstance;
        this.pendingStates = [];
    }
    addState(partialState) {
        this.pendingStates.push(partialState);
        this.emitUpdate();
    }
+    emitUpdate(nextProps){//支持属性变化更新
+        this.nextProps = nextProps;
+        (nextProps || !updateQueue.isBatchingUpdate)
        ? this.updateComponent()
        : updateQueue.add(this);
    }
    updateComponent() {
+        let { classInstance, pendingStates,nextProps } = this;
+        if (nextProps || pendingStates.length > 0) {
            shouldUpdate(
                 classInstance,
+                nextProps,
                 this.getState()
            );
        }
    }
    getState() {
        let { classInstance, pendingStates } = this;
        let { state } = classInstance;
        if (pendingStates.length) {
            pendingStates.forEach(nextState => {
                if (isFunction(nextState)) {
                    nextState = nextState.call(classInstance, state);
                }
                state = { ...state, ...nextState };
            });
            pendingStates.length = 0;
        }
        return state;
    }
}
+function shouldUpdate(classInstance, nextProps, nextState) {
+    let noUpdate = classInstance.shouldComponentUpdate && !classInstance.shouldComponentUpdate(nextProps, nextState);
+    if(nextProps){classInstance.props = nextProps;}
    classInstance.state = nextState;
    if(!noUpdate){
       classInstance.forceUpdate();
    }
}
class Component{
    static isReactComponent=true
    constructor(props){
        this.props = props;
        this.state = {};
        this.updater = new Updater(this);
+        this.nextProps = null;
    }
    setState(partialState) {
        this.updater.addState(partialState);
    }
    forceUpdate(){
      if(this.componentWillUpdate)
        this.componentWillUpdate();
      let newVdom= this.render();
+     let currentVdom = compareTwoVdom(this.oldVdom.dom.parentNode,this.oldVdom,newVdom);
+     this.oldVdom=currentVdom;
      if(this.componentDidUpdate)
          this.componentDidUpdate(this.props,this.state);
  }
}

export default Component;
```

### 9.3 react-dom.js

src\react-dom.js

```diff
import { addEvent } from './event';
function render(vdom, container) {
    const dom = createDOM(vdom);
    container.appendChild(dom);
}
export function createDOM(vdom) {
    if (typeof vdom === 'string' || typeof vdom === 'number') {
        return document.createTextNode(vdom);
    }
    let { type, props, ref } = vdom;
    let dom;
    if (typeof type === 'function') {
        if(type.isReactComponent){
            return mountClassComponent(vdom);
        } else{
            return mountFunctionComponent(vdom);
        }
    } else {
        dom = document.createElement(type);
    }
+   updateProps(dom, {},props);
    if (typeof props.children === 'string' || typeof props.children === 'number') {
        dom.textContent = props.children;
    } else if (typeof props.children == 'object' && props.children.type) {
        render(props.children, dom);
    } else if (Array.isArray(props.children)) {//是数组的话
        reconcileChildren(props.children, dom);
    } else {
        dom.textContent = props.children ? props.children.toString() : '';
    }
    if (ref)
        ref.current = dom;
+   vdom.dom=dom;
    return dom;
}
function mountClassComponent(vdom) {
    const { type, props } = vdom;
    const classInstance = new type(props);
+   vdom.classInstance = classInstance;
    if (classInstance.componentWillMount)
        classInstance.componentWillMount();
    const renderVdom = classInstance.render();
    const dom = createDOM(renderVdom);
+   vdom.dom = renderVdom.dom = dom;
+   classInstance.oldVdom=renderVdom;
    if (classInstance.componentDidMount)
        classInstance.componentDidMount();
    return dom;
}
function mountFunctionComponent(vdom) {
    const { type, props } = vdom;
    const renderVdom = type(props);
    return createDOM(renderVdom);
}
+function updateProps(dom, oldProps, newProps) {
    for (let key in newProps) {
        if (key === 'children') { continue; }
        if (key === 'style') {
            let style = newProps[key];
            for (let attr in style) {
                dom.style[attr] = style[attr]
            }
        } else if (key.startsWith('on')) {
            addEvent(dom, key.toLocaleLowerCase(), newProps[key]);
        } else {
            dom[key] = newProps[key];
        }
    }
}
function reconcileChildren(childrenVdom, parentDOM) {
    for (let i = 0; i < childrenVdom.length; i++) {
        let childVdom = childrenVdom[i];
        render(childVdom, parentDOM);
    }
}
+export function compareTwoVdom(parentDOM, oldVdom, newVdom,nextVdom) {
+    if (!oldVdom && !newVdom) {//新老都是null
+        return null;
+    } else if (oldVdom && !newVdom) {//老的有节点,新的没有
+        let currentDOM = oldVdom.dom;
+        currentDOM.parentNode.removeChild(currentDOM);
+        if (oldVdom.classInstance.componentWillUnmount)
+            oldVdom.classInstance.componentWillUnmount();
+        return null;
+    } else if (!oldVdom && newVdom) {//老的是null,新的有的创 
+        let newDOM = createDOM(newVdom);
+        if(nextVdom)
+          parentDOM.insertBefore(newDOM,nextVdom.dom);
+        else
+          parentDOM.appendChild(newDOM);
+        newVdom.dom = newDOM;
+        return newVdom;
+    //新老节点都有,但是类型不同,也不能复用,所以删除建新的 
+    } else if ((oldVdom && newVdom && (oldVdom.type !== newVdom.type))) {
+        let oldDOM = oldVdom.dom;
+        let newDOM = createDOM(newVdom);
+        newVdom.dom = newDOM;
+        oldDOM.parentNode.replaceChild(newDOM, oldDOM);
+        if (oldVdom.classInstance.componentWillUnmount)
+            oldVdom.classInstance.componentWillUnmount();
+        return newVdom;
+    } else {
+        updateElement(oldVdom, newVdom);
+        return newVdom;
+    }
+}
+ function updateElement(oldVdom,newVdom){
+   if(typeof oldVdom.type === 'string'){//原生的DOM类型 div span p
+     let currentDOM = newVdom.dom = oldVdom.dom;//获取 老的真实DOM
+     updateProps(currentDOM,oldVdom.props,newVdom.props);
+     updateChildren(currentDOM,oldVdom.props.children,newVdom.props.children);
+   }else if(typeof oldVdom.type === 'function'){//就是类组件了
+     if(oldVdom.type.isReactComponent){//说明它是一个类组件的实例
+         newVdom.classInstance = oldVdom.classInstance;
+         updateClassInstance(oldVdom,newVdom);
+     }else{//说明它是一个函数式组件
+         updateFunctionComponent(oldVdom,newVdom);
+     }
+   }
+ }
+function updateFunctionComponent(oldVdom,newVdom){debugger
+    let parentDOM = oldVdom.renderVdom.dom.parentNode;
+    let {type,props} = newVdom; //获取新的虚拟函数组件
+    let newRenderVdom = type(props);//传入属性对象并执行它,
+    newVdom.renderVdom=newRenderVdom;
+    compareTwoVdom(parentDOM,oldVdom.renderVdom,newRenderVdom);
+}
+function updateChildren(parentDOM, oldVChildren, newVChildren) {
+    //如果是纯文本则直接改变
+    if ((typeof oldVChildren === 'string' || typeof oldVChildren === 'number')
+        && (typeof newVChildren === 'string' || typeof newVChildren === 'number')) {
+        if (oldVChildren !== newVChildren) {
+            parentDOM.textContent = newVChildren;
+        }
+        return;
+    }
+    oldVChildren = Array.isArray(oldVChildren)?oldVChildren:[oldVChildren];
+    newVChildren = Array.isArray(newVChildren)?newVChildren:[newVChildren];
+    let maxLength = Math.max(oldVChildren.length, newVChildren.length);
+    for (let i = 0; i < maxLength; i++) {
+        let nextDOM = oldVChildren.find((item,index)=>index>i&&item&&item.dom);
+        compareTwoVdom(parentDOM, oldVChildren[i], newVChildren[i],nextDOM&&nextDOM.dom);
+    }
+}
+function updateClassInstance(oldVdom, newVdom) {
+    let classInstance = oldVdom.classInstance;
+    if (classInstance.componentWillReceiveProps) {
+        classInstance.componentWillReceiveProps();
+    }
+    classInstance.updater.emitUpdate(newVdom.props);
+}
export default {
    render
}
```

## 10.新的生命周期

### 10.1 react-dom.js

src\react-dom.js

```diff
function mountClassComponent(vdom) {
    const { type, props } = vdom;
    const classInstance = new type(props);
    vdom.classInstance = classInstance;
+   classInstance.ownVdom = vdom;
    if (classInstance.componentWillMount)
        classInstance.componentWillMount();
    const renderVdom = classInstance.render();
    const dom = createDOM(renderVdom);
    vdom.dom = renderVdom.dom = dom;
    classInstance.oldVdom=renderVdom;
    if (classInstance.componentDidMount)
        classInstance.componentDidMount();
    return dom;
}
```

### 10.2 Component.js

src\Component.js

```diff
import {compareTwoVdom} from './react-dom';
import {isFunction } from './utils';
export let updateQueue = {
    updaters: [],
    isBatchingUpdate: false,
    add(updater) {
        this.updaters.push(updater);
    },
    batchUpdate() {
        this.updaters.forEach(updater=>updater.updateComponent());
        this.isBatchingUpdate = false;
    }
};
class Updater {
    constructor(classInstance) {
        this.classInstance = classInstance;
        this.pendingStates = [];
    }
    addState(partialState) {
        this.pendingStates.push(partialState);
        this.emitUpdate();
    }
    emitUpdate(nextProps){//支持属性变化更新
        this.nextProps = nextProps;
        nextProps || !updateQueue.isBatchingUpdate
        ? this.updateComponent()
        : updateQueue.add(this);
    }
    updateComponent() {
        let { classInstance, pendingStates,nextProps } = this;
        if (nextProps || pendingStates.length > 0) {
            shouldUpdate(
                 classInstance,
                 nextProps,
                 this.getState()
            );
        }
    }
    getState() {
        let { classInstance, pendingStates } = this;
        let { state } = classInstance;
        if (pendingStates.length) {
            pendingStates.forEach(nextState => {
                if (isFunction(nextState)) {
                    nextState = nextState.call(classInstance, state);
                }
                state = { ...state, ...nextState };
            });
            pendingStates.length = 0;
        }
        return state;
    }
}
function shouldUpdate(classInstance, nextProps, nextState) {
    let noUpdate = classInstance.shouldComponentUpdate && !classInstance.shouldComponentUpdate(nextProps, nextState);
    if(nextProps){classInstance.props = nextProps;}
    classInstance.state = nextState;
    if(!noUpdate){
       classInstance.forceUpdate();
    }
}
class Component{
    static isReactComponent=true
    constructor(props){
        this.props = props;
        this.state = {};
        this.updater = new Updater(this);
        this.nextProps = null;
    }
    setState(partialState) {
        this.updater.addState(partialState);
    }
    forceUpdate(){
      if(this.componentWillUpdate)
        this.componentWillUpdate();
+      if (this.ownVdom.type.getDerivedStateFromProps) {
+            let newState = this.ownVdom.type.getDerivedStateFromProps(this.props, this.state);
+            if (newState)
+              this.state = newState;
+      }
+      let newVdom = this.render();
+      let extraArgs = this.getSnapshotBeforeUpdate && this.getSnapshotBeforeUpdate();
      let currentVdom = compareTwoVdom(this.oldVdom.dom.parentNode,this.oldVdom,newVdom);
      this.oldVdom=currentVdom;
      if(this.componentDidUpdate)
+       this.componentDidUpdate(this.props,this.state,extraArgs);
  }
}
export default Component;
```

## 11.context

### 11.1 src\index.js

```js
import React, { Component } from './react';
import ReactDOM from './react-dom';
let ThemeContext = React.createContext(null);
let root = document.querySelector('#root');
class Header extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, padding: '5px' }}>
                            header
                          <Title />
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Title extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}` }}>
                            title
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Main extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, margin: '5px', padding: '5px' }}>
                            main
                        <Content />
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
class Content extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (value) => (
                        <div style={{ border: `5px solid ${value.color}`, padding: '5px' }}>
                            Content
                            <button onClick={() => value.changeColor('red')} style={{ color: 'red' }}>红色</button>
                            <button onClick={() => value.changeColor('green')} style={{ color: 'green' }}>绿色</button>
                        </div>
                    )
                }
            </ThemeContext.Consumer>

        )
    }
}

class Page extends Component{
    constructor(props) {
        super(props);
        this.state = { color: 'red' };
    }
    changeColor = (color) => {
        this.setState({ color });
    }
    render() {
        let contextVal = { changeColor: this.changeColor, color: this.state.color };
        return (
            <ThemeContext.Provider value={contextVal}>
                <div style={{ margin: '10px', border: `5px solid ${this.state.color}`, padding: '5px', width: 200 }}>
                    page
                    <Header />
                    <Main />
                </div>
            </ThemeContext.Provider>

        )
    }
}
ReactDOM.render(<Page />, root);
```

### 11.2 src\react.js

src\react.js

```diff
import Component from "./Component";
function createElement(type, config, children) {
  let ref;
  if (config) {
    delete config.__source;
    delete config.__self;
    ref = config.ref;
  }
  let props = { ...config };
  if (arguments.length > 3) {
    children = Array.prototype.slice.call(arguments, 2);
  }
  props.children = children;
  return {
    type,
    props,
    ref,
  };
}
function createRef() {
  return { current: null };
}
+function createContext() {
+  function Provider(props) {
+    Provider._value = props.value;
+    return props.children;
+  }
+  function Consumer(props) {
+    return props.children(Provider._value);
+  }
+  return {
+    Provider,
+    Consumer,
+  };
+}
export default {
  createElement,
  Component,
  createRef,
+  createContext
};
export {
    Component
}
```

[zhufengreact202010](https://gitee.com/zhufengpeixun/zhufengreact202010/tree/master/1.basic)