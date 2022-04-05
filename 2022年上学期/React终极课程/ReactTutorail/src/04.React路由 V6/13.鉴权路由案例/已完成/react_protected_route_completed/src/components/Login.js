import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const users = {
  // 普通登录用户
  zhangsan: [2001],
  // 管理员
  lisi: [2001, 5150],
  // 编辑员
  wangwu: [2001, 1984],
};

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { setAuth } = useAuth();

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === "zhangsan" || user === "lisi" || user === "wangwu") {
      setAuth({ user, pwd, roles: users[user] });
      navigate({ pathname: location.state?.pathname || "/home" });
    } else {
      setErrMsg("用户不存在");
    }
  };

  return (
    <section>
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>登录</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">用户名:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          autoFocus
        />

        <label htmlFor="password">密码:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>登录</button>
      </form>
    </section>
  );
}

export default Login;

// const ROLES = {
//   USER: 2001,
//   ADMIN: 5150,
//   EDITOR: 1984,
// };
