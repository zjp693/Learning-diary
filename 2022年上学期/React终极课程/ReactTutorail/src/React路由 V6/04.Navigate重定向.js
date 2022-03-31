import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />}></Route>
    <Route path="*" element={<Navigate to="/"/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App