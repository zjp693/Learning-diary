import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import News from "./pages/News";
import Home from "./pages/Home";
function App() {
  // 注意： 在v6的版本中的。一旦路由匹配成功，则不在向后匹配，所以不再需要使用exact属性
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/news' element={<News/>}></Route>
        </Routes>
        <Link to="/">Home</Link>
          <Link to="/news">news</Link>
      </BrowserRouter>
    </>
  );
}

export default App;
