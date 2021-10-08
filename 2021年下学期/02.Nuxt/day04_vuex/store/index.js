export const state = () => ({
  counter: 0
})
// 同步
export const mutations = {
  increment(state, payload) {
    state.counter += payload
  }
}
// 异步
export const actions = {
  asyncIncrement({
    commit
  }, payload) {
    setTimeout(function () {
      commit('increment', payload)
    }, 1000)
  }

}
