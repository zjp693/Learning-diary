import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import News from "./pages/News";
import InnerNews from "./pages/InnerNews";
import OuterNews from "./pages/OuterNews";
import Home from "./pages/Home";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}>
            <Route index element={<InnerNews />}></Route>
            <Route path="inner" element={<InnerNews />}></Route>
            <Route path="outer" element={<OuterNews />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
