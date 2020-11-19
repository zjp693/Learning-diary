import { createRouter, createWebHashHistory } from "vue-router";

// 导入登录页面组件
import Login from "@/views/Login";

// 声明路由规则
const routes = [
  // 如果地址为根路径，直接跳转到登录页面
  { path: "/", redirect: "/login" },
  // 登录页面
  { path: "/login", component: Login }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
