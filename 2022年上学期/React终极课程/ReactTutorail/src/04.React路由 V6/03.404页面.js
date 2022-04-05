import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Error from './pages/Error'
function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
   </BrowserRouter>
   </>
}

export default App