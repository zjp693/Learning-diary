import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import News from "./pages/News";
import InnerNews from "./pages/InnerNews";
import OuterNews from "./pages/OuterNews";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 子路由 */}
        <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}>
            <Route index element={<InnerNews />}></Route>
            <Route path="inner" element={<InnerNews />}></Route>
            <Route path="outer" element={<OuterNews />}></Route>
        
          </Route>
              {/* 路由传参 */}
              <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
