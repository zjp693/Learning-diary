import axios from "axios";


export default (context, inject) => {
  // baseURL
  axios.defaults.baseURL = "https://cnodejs.org/api/v1";
  // 注入插件
  inject('api', {
    getTopic(path) {
      return axios.get(path);
    },
    getTopicsDetail(path) {
      return axios.get(path)
    }
  })

}

// 
