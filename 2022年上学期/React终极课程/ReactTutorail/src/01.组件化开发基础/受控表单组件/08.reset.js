import React, { useState } from 'react'
const initialState={
  username:''
}
function App() {
  const [formState,setFormState] = useState(initialState)
  const onChangeHandler=(e)=>{
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }

  const onResetHandler=(e)=>{
    setFormState(initialState)
  }
  return (
    <>
    <form>
      <input type="text" name="username" value={formState.username} onChange={onChangeHandler}></input>
      <button type='button' onClick={onResetHandler}>重置</button>
    </form>
    
    </>
  )
}

export default App