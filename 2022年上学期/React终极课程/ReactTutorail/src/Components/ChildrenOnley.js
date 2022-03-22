import { Children } from "react";

function Message(props) {
  try {
    Children.only(props.children);
  } catch (error) {
    // Error: React.Children.only expected to receive a single React element child.
    // 错误: React.children 只期望接收一个 React 元素
    return( <>
    <div>Message 组件标签只接收一个子元素 


    </div> 

    </>)


  }
  return <div>{props.children}</div>;
}

export default Message