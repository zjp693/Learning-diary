import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

const users = {
  zhangsan: [2001],
  lisi: [2001, 5150],
  wangwu: [2001, 5150],
};

function Login() {
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
