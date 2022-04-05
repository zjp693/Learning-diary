import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthGuardOutlet from './common/AuthGuardOutlet'
import Admin from './pages/Admin'

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/admin" element={<AuthGuardOutlet></AuthGuardOutlet>}>
     <Route path="" element={<Admin/>}></Route>
   </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App