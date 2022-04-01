import { Link, useNavigate } from "react-router-dom";

function Home() {
const navigator=useNavigate()
  return <div>欢迎来到首页 🌶🌶🌶 

    <button onClick={()=>navigator("/news")}> 跳转到新闻页面</button>

    <ul>
      <li>
        <Link to="/detail?id=1">老旧小区改造，这三区名单来了！</Link>
      </li>
      <li>
        <Link to="/detail?id=2">穿鞋把脚放列车座位上, 韩总统候选人尹锡悦引发网友批..</Link>
      </li>
    </ul>
  </div>;
}
export default Home;