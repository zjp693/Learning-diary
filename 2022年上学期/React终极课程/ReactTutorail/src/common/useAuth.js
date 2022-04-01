import { useEffect, useState } from "react";

function isAuth() {
  // 模拟鉴权成功
  return Promise.resolve();
  // 模拟鉴权失败
  // return Promise.reject();
}

function useAuth() {
  // 用于存储鉴权结果
  // true 成功
  // false 失败 (默认值)
  const [auth, setAuth] = useState(false);
  // 用于存储异步状态
  // true 等待 (默认值)
  // false 结束
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 开始鉴权
    isAuth()
      // 成功
      .then(() => setAuth(true))
      // 失败
      .catch(() => setAuth(false))
      // 不管成功还是失败, 都将异步状态更新为结束
      .finally(() => setLoading(false));
  }, []);
  // 返回异步状态和鉴权结果
  return { loading, auth };
}

export default useAuth;