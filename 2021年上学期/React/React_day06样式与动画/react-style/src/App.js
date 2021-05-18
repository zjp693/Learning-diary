//  styled-component 的基本使用

// import React, { Component } from 'react'
// import styled from 'styled-components';


// // 实例  
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// //  属性值传递 （props）
// // 在styled-component中使用React传递的属性   
// // 需求: 如果有primary这个属性，那么就把按钮的样式设置为背景色 字体颜色
// //  如果没有primary这个属性，那么就把按钮的样式设置为
// // {/* <button primary >按钮</button> */ }
// const Button = styled.div`
// width:${props => props.width};
// height:${props => props.height};
// color:${props => props.color};
// font-size: ${props => { console.log(props) }};
// background-color: ${props => props.primary ? "red" : "#ffff"};
// `
// export default class App extends Component {
//   state = {
//     width: "70px",
//     height: "30px",
//     color:"pink"
//   }
//   render() {
//     return (
//       <div>
//         <Wrapper>
//           <Title>Hello World, this is my first styled component!</Title>
//            <Button {...this.state}>我是按钮</Button>
//         <br/>
//           <Button primary {...this.state}>我是按钮</Button>
//         </Wrapper>
       
//       </div>
//     )
//   }
// }



// --------------------------------------------------------------------------------------------------------------------

// 动画过渡
import React, { Component } from 'react'

import styled from "styled-components"


const Div = styled.div`
width:${props => props.width};
height:${props => props.height};
background-color:green;
opacity:${props => props.opacity};
 transition: all 3s;
`
export default class App extends Component {
  // div的初始状态
  state = {
    width:"0",
    height:"0",
    opacity: "0"
    
  }
  // div的改变后的状态
    btnClick = () => {
    this.setState({
      width: "60px",
      height: "60px",
      opacity: 1,
     
    })
  }
  render() {
    return (
      <div>
        <Div {...this.state}></Div>
         <button onClick={this.btnClick}>按钮</button>
      </div>
    )
  }
}
