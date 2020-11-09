import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      seleve: "第一周",
      // 题号
      itemNum: 1,
      // 获取的数据
      questions: [],
      // 答案
      answerId: []
    }
  },
  mutations: {
    // 初始化数据
    initDta(state, res) {
      // console.log(res); 
      state.questions = res.data
    },
    // 存储答案
    answer(state, res) {
      state.answerId.push(res)
    },
    // 题目索引+1sX
    add(state) {
      state.itemNum++
      console.log(state.itemNum);
    },
    // 重置
    get(state) {
      state.itemNum = 1,
        // 获取的数据
        state.answerId = []
    }
  },
  actions: {
    // 假装调用接口
    async getData(context) {
      let res = await axios.get("/data/question.json")
      context.commit("initDta", res)
    },
    // 
    additem(context, res) {
      context.commit("answer", res)

      context.commit("add")


    },
    additems(context, res) {
      context.commit("answer", res)
    }
  },
  modules: {}
});
