import React,{useRef} from 'react'

function App() {
  const usernameRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(usernameRef.current.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" ref={usernameRef} />
      <input type="submit" />
    </form>
  )
}

export default App