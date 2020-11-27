import { createRouter, createWebHashHistory } from "vue-router";

// 导入登录页面组件
import Login from "@/views/Login";

// 声明路由规则
const routes = [
  // 如果地址为根路径，直接跳转到登录页面
  { path: "/", redirect: "/login" },
  // 登录页面
  { name: "Login", path: "/login", component: Login },
  {
    path: '/home', name: 'home', component: () => import("../views/home"),
    children: [
      { path: "/home", redirect: "/wecoem" },
      { path: '/wecoem', component: () => import("../components/wecome") },
      { path: '/users', component: () => import("../components/users") }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  let isAuthenticated = window.sessionStorage.getItem("token")
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
export default router;
