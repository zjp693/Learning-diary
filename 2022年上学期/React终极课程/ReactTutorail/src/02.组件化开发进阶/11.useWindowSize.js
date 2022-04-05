import React from 'react'
import useWindowSize from './Components/useWindowSize'

function App() {
  const size=useWindowSize()

  return (
<>
<div>{size.width}px/{size.height}px</div>
</> 
 )
}

export default App