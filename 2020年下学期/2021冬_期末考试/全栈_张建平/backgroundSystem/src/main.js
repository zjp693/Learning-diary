import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 引入element3
import 'element3/lib/theme-chalk/index.css';
import Element3 from 'element3'

createApp(App)
  .use(router)
  .use(Element3)
  .mount("#app");
