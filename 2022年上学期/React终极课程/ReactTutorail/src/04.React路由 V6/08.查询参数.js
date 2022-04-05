import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Detail from './pages/Detail';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App