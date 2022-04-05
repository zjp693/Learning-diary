import React from 'react'
import Home from "../pages/Home";
import { useRoutes } from "react-router-dom";
import News from "../pages/News";
import InnerNews from "../pages/InnerNews";
import OuterNews from "../pages/OuterNews";
//  useRoutes 可以通过javascript配置对象的方式定义路由规则
const routes=[
  {path:"/",element:<Home/>},
  {path: "/news",element:<News/>,
  children: [
    {path:"inner",element:<InnerNews/>},
    {path:"outer",element:<OuterNews/>}
  ]
  }
]

function AppRoute() {
  const element=useRoutes(routes);
return element;
}
export default AppRoute;