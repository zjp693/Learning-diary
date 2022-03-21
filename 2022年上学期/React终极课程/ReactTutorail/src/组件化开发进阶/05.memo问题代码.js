import React, { useEffect, useState } from 'react'
import ShowName from "./ShowName";
function App() {
  const [index,setIndex]=useState(0)
  const [name]=useState("张三")

  useEffect(()=>{
    const  timer=setInterval(()=>{
      setIndex((prev)=>prev+1);
    },1000)
    return ()=>clearInterval(timer)
  },[])
  return (
   <>
   <p>{index}</p>
   <ShowName name={name}/>
   </>
  )
}

export default App