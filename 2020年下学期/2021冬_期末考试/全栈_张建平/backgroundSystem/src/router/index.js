import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/home",
        name: "HomeMain",
        component: () =>
          import("@/views/HomeMain")
      },
      {
        path: "/user/teacher",
        name: "UserTeacher",
        component: () =>
          import("@/views/UserTeacher")
      },
      {
        path: "/user/student",
        name: "UserStudent",
        component: () =>
          import("@/views/UserStudent")
      },
      {
        path: "/course",
        name: "Course",
        component: () =>
          import("@/views/Course")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
