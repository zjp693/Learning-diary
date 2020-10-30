import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      name: "榨干啊",
      aconst: 0
    }
  },
  mutations: {
    addData(state) {
      state.aconst++
      // console.log(state.const);
    }
  },
  actions: {
    getDate(context) {
      setInterval(() => {
        context.commit('addData')
      }, 400);
    }
  },
  getters: {
    get(state) {
      
      return state.aconst
    }
  },
  modules: {}
});
