import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//  使用axios
import axios from "axios";
// 使用Ant-Design-Vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 线上配置好的后台服务
axios.defaults.baseURL = "http://www.wanlum.com:8888/api/private/v1/";
createApp(App)
  .use(router)
  .use(Antd)
  .mount("#app");
