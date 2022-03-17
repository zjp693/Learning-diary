import React, { useEffect, useRef } from 'react'


import Message from './message'

function App() {
  const messageRef=useRef()
  useEffect(()=>{
    console.log(messageRef.current);
  },[])
  return (
  <>
  <Message ref={messageRef}/>
  </>
  )
}

export default App