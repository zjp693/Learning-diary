import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRoute from "./Components/AppRoute";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./05.服务端渲染/Next/next-tutorial/pages/about";



function App() {
  return (
   <>
   <BrowserRouter>
       <Routes>
           <Route path="/" element={<Layout/>}>
               <Route path="" element={<Home/>}></Route>
               <Route path="/about" element={<About/>}></Route>
           </Route>
           <Route path='/admin' element={<AdminLayout/>}>
               <Route path="" element={<AdminHome/>}></Route>
           </Route>
       </Routes>
     <AppRoute></AppRoute>
   </BrowserRouter>
   </>
  )
}

export default App