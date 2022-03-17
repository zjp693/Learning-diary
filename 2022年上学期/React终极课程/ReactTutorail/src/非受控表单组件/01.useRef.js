import React, { useRef } from 'react'

function App() {
  const username=useRef();
  const handler=()=>console.log(username);
  return (
  <>  
  <input ref={username} onChange={handler}></input>
  </>
  )
}

export default App