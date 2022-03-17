import { useState } from "react";

function App() {	
  const [state, setState] = useState({
    colors: ["palevioletred", "yellow", "papayawhip"],
    index: 0,
  });
  const styles = {
    width: 200,
    padding: "50px 0",
    background: state.colors[state.index],
    textAlign: "center",
  };
  const onClickHandler = () => {
    setState({
      ...state,
      index: state.index + 1 > 2 ? 0 : state.index + 1,
    });
  };
  return (
    <div style={styles} onClick={onClickHandler}>
      Hello React
    </div>
  );
}

export default App;