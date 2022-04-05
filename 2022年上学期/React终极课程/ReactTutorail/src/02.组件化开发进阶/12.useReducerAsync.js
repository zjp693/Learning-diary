import axios from "axios";

// 通过 [useReducerAsync](https://github.com/dai-shi/use-reducer-async) 自定义钩子函数可以将处理状态过程中的副作用代码抽离到组件外部。
import { useReducerAsync } from "use-reducer-async";
const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "setTodo":
      return [...state, action.payload];
    default:
      return state;
  }
}

const asyncHandlers={
  loadTodo:({dispatch})=>async (actions)=>{
    let response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${actions.payload}`
    );
    dispatch({type:"setTodo",payload:response.data})
  }
}


function App() {
  const [state, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncHandlers
  )

  return (
    <div>
      <button onClick={() => dispatch({type:"loadTodo",payload:1})}>button</button>
      <div>{JSON.stringify(state, null, 2)}</div>
    </div>
  );
}

export default App;