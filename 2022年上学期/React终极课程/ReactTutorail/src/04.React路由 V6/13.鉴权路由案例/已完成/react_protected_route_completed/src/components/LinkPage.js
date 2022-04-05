import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <section>
      <h1>链接</h1>
      <br />
      <h2>公开的</h2>
      <Link to="/login">登录</Link>
      <br />
      <h2>受保护的</h2>
      <Link to="/home">主页</Link>
      <Link to="/editor">编辑员主页</Link>
      <Link to="/admin">管理员主页</Link>
    </section>
  );
};

export default LinkPage;
