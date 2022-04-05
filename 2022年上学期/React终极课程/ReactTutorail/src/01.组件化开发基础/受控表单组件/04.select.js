import React, { useState } from 'react'

function App() {
const [formState,setFormState] =useState({
    transport:''
  })
  const onChangeHandler=(e)=>{
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }
  return (
   <>
   <select
   name='transport'
  value={formState.transport}
  onChange={onChangeHandler}
   >
     <option value="" >请选择交通工具</option> 
     <option value="0">火车</option> 
     <option value="1">飞机</option> 
     </select>
   </>
  )
}

export default App