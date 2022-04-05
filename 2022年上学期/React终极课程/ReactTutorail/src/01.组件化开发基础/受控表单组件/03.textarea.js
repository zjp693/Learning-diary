import React, { useState } from 'react'


function App() {
  const [formState,setFormState]= useState({
    biography:""
  })
  const onChangeHandler=(e)=>{
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }
  return (
   <textarea name='biography' value={formState.biography}
   onChange={onChangeHandler}
   >
     </textarea>
  )
}

export default App