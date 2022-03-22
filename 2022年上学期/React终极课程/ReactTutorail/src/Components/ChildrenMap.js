import { Children } from "react";

function Message(props) {
  const items = Children.map(props.children, (item) => (
    <a href="http://www.baidu.com">{item}</a>
 
  ));
  return <div>{items}</div>;
}

export default Message