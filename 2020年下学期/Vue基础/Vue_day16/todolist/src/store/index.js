import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      list: [],
      vk: "all"
    };
  },
  mutations: {
    // 初始化
    initDta(state, res) {
      state.list = res.data;
      console.log(res);
    },
    // 添加
    addData(state, res) {
      state.list.push({
        id: new Date().valueOf(),
        info: res,
        done: false
      });
    },
    // 删除
    del(state, res) {
      // console.log(state, res);
      var index = state.list.findIndex(item => item.id == res);
      state.list.splice(index, 1);
    },
    // 更新任务状态
    changTask(state, res) {
      // console.log(res.stats);
      var index = state.list.findIndex(item => item.id == res.id);
      state.list[index].done = res.stats;
    },
    // 清除已完成
    delDate(state) {
      // console.log(state, res);
      state.list = state.list.filter(item => item.done == false);
    },
    // 切换状态
    tak(state, res) {
      state.vk = res;
    }
  },
  actions: {
    async getData(context) {
      let data = await axios.get("/list.json");
      context.commit("initDta", data);
    }
  },
  getters: {
    sum(state) {
      let data = state.list.filter(item => item.done == false);
      return data.length;
    },
    fliterData(state) {
      console.log(state.vk);
      if (state.vk == "all") {
        return state.list;
      }
      if (state.vk == "done") {
        var data = state.list.filter(item => item.done == false);
        console.log(data);
        return data
      }
      if (state.vk == "undone") {
        var res = state.list.filter(item => item.done == true);
        console.log(res);
        return res
      }
    }
  }
});
