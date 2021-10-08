// 存储公共数据
export const state = () => {
  return {
    count: 0
  }
}

// // 定义mutations 完成数据的同步修改
// export const mutations = {
//   // 同步修改
//   increment(state, payload) {
//     state.count += payload
//   },
//   // 修改随机数
//   updateRandom(state, payload) {
//     state.count = payload
//   }

// }
//  定义actions 完成数据的异步修改
// export const actions = {
//   asyncIncrement({
//     commit
//   }, payload) {
//     setTimeout(() => {
//       commit("increment", payload)
//     }, 1000);
//   }
// }
export const mutations = {
  updateTopics(state, payload) {
    state.topics = payload
    console.log(1);
    console.log(state.topics);
  }
}
