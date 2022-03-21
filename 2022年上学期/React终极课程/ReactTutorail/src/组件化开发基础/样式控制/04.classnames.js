import React from 'react'
import classNames from "classnames";
function App() {
  return <div className={classNames("foo", { bar: true })}>App works</div>;
}

export default App