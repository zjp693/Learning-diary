const cookieparser = require("cookieparser")

export const state = () => {
  return {
    auth: null
  }
}

export const mutations = {
  updataAuth(state, payload) {
    state.auth = payload
  }

}

export const actions = {
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    console.log('nuxtServerInit执行了');
    let auth = null;
    console.log(req.headers.cookie);
    if (req.headers.cookie) {
      console.log(req.headers.cookie, 'req.headers.cookie');
      auth = cookieparser.parse(req.headers.cookie);
    }
    commit('updataAuth', auth);
  }

}
