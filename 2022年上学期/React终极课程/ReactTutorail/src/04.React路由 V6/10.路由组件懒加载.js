import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loadable from "./common/Loadable";


const Home=Loadable(lazy(()=>import("./pages/Home")))
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home></Home>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
