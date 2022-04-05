import React, { useState } from 'react'

function App() {
  const [formState,setFromStat]=useState({size:''})
  const onChangeHandler=(e)=>{
    setFromStat({
      ...formState,
      [e.target.name]:e.target.value
    })
  }
  return (
    <>
    <input type='radio' name='size' value='m' onChange={onChangeHandler} checked={formState.size==="m"}/><span>M</span>
    <input type='radio' name='size'value='s' onChange={onChangeHandler} checked={formState.size==="s"}/><span>S</span>

    </>
  )
}

export default App