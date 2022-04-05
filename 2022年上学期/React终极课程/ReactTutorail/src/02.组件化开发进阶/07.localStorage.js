import React from 'react'
import { useLocaStorang } from './localStorage'

function App() {
  const [name,setName]=useLocaStorang("name","Bob")
  return (
   <>
   <div>
     <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}>
    
     </input>
   </div>
   </>
  )
}

export default App