// src/Message.js
import { forwardRef } from "react";

function Message(props, ref) {
  return <span ref={ref}>I am span</span>;
}
export default forwardRef(Message);