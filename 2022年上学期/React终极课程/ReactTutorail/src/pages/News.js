import { NavLink, Outlet } from "react-router-dom";

function News() {
  return <> <div>欢迎来到关于新闻页 😁😁😁</div>
  <NavLink to="/news/inner">国内新闻</NavLink>
  <NavLink to="/news/outer">国际新闻</NavLink>
<Outlet></Outlet>
  </>
}
export default News;