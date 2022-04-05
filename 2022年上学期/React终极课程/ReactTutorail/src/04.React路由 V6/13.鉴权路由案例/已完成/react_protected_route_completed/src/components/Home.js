import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Home() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    setAuth({});
    navigate({ pathname: "/" });
  };

  return (
    <section>
      <h1>首页</h1>
      <br />
      <p>你已经登录了</p>
      <br />
      <Link to="/editor">跳转到编辑员主页</Link>
      <br />
      <Link to="/admin">跳转到管理员主页</Link>
      <br />
      <Link to="/lounge">跳转到休息区</Link>
      <br />
      <Link to="/">跳转到链接页</Link>
      <div className="flexGrow">
        <button onClick={logout}>退出</button>
      </div>
    </section>
  );
}

export default Home;
