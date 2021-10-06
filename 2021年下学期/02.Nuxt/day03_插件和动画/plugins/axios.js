import axios from "axios";
export default (context, inject) => {
  axios.defaults.baseURL = "https://cnodejs.org/api/v1"
  inject("api", {
    getTopice(path) {
      return axios.get(path)
    }
  })
}
