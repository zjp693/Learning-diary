import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/item",
    component: () =>
      import("../components/Item")
  },
  {
    path: "/score",
    component: () =>
      import("../components/Score")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
