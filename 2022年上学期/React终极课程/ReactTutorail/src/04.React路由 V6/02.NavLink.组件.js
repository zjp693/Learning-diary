import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import News from "./pages/News";
import Home from "./pages/Home";
function App() {
  const activeClassName=({isActive})=>(isActive?"on":"off")
  // 注意： 在v6的版本中的。一旦路由匹配成功，则不在向后匹配，所以不再需要使用exact属性
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>

        {/* 路由跳转 */}
        {/* <NavLink to="/" className={activeClassName}>Home</NavLink> */}
        {/* 行为样式修改方式   */}
        <NavLink to='/' style={({isActive})=>({color:isActive?"red":"blue"})}>Home</NavLink>
        <NavLink to="/news" className={activeClassName}>News</NavLink>
      </BrowserRouter>
    </>
  );
}

export default App;
