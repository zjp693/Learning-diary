import React from 'react'

function App() {
  const [username,setUsername]=React.useState("")
  return (
    <input 
    type="text"
    value={username}
    onChange={(event)=>setUsername(event.target.value)}
    ></input>
  )
}

export default App