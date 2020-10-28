// 引入
import { createStore } from "vuex";

// 导出配置

// createStore创建仓库(store就是数据仓库)
export default createStore({
  // 存数据的 state 状态
  state() {
    return {};
  },
  // 存方法的(存同步方法的 存异步方法)

  // 用于修改Store中的数据
  mutations: {},
  // actions用于处理异步任务
  actions: {},

  // 类似于computed  getters 用于对Store中的数据进行加工处理形成新的数据。
  getters: {}
});
