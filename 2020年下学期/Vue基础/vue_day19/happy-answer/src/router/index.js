import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";

const routes = [
  // { path: '/', redirect: '/home' },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/item",
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/Item")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
