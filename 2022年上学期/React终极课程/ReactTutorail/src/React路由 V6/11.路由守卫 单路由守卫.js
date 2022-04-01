import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import AuthGuard from './common/AuthGuard'
import Home from './pages/Home'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/amin" element={<AuthGuard><Home/> </AuthGuard>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App