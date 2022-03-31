import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import News from "./pages/News";
import InnerNews from "./pages/InnerNews";
import OuterNews from "./pages/OuterNews";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/news' element={<News/>}>
          <Route path="inner" element={<InnerNews/> }></Route>
          <Route path="outer" element={<OuterNews/>}></Route>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
