import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      // 活动周数
      level: "第一周",
      // 题号
      itemNum: 1,
      // 获取的数据
      questions: []
    };
  },
  mutations: {
    initData(state, res) {
      console.log(res.data);
      state.questions = res.data;
    }
  },
  actions: {
    async getData(context) {
      let res = await axios.get("/data/question.json");
      context.commit("initData", res);
    }
  },
  modules: {}
});
