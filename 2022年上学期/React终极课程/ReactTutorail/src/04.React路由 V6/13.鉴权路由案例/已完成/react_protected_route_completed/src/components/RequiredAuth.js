import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequiredAuth({ allowRoles }) {
  // 获取目标页面的路由信息
  const location = useLocation();
  // 获取授权信息
  const { auth } = useAuth();
  // 检测用户的角色在允许的范围内
  const isAllowed = auth.roles?.find((role) => allowRoles.includes(role));
  // 如果在
  if (isAllowed) {
    // 返回路由插座, 使嵌套路由继续渲染, 让用户访问目标页面
    return <Outlet />;
  } else {
    // 如果没有查询到允许的角色, 判断用户是否登录
    if (auth.user) {
      // 如果用户已经登录说明他确实没有权限访问该路由, 跳转到提示用户没权限的页面
      return <Navigate to="/unauthorized" replace />;
    } else {
      // 否则就是用户没有登录, 跳转到登录页面
      return (
        <Navigate to="/login" state={{ pathname: location.pathname }} replace />
      );
    }
  }
}

export default RequiredAuth;
