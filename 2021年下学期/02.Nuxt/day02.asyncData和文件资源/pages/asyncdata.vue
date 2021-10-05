<template>
  <div class="hoem">
    <h1>{{ msg }}</h1>
    <h1>{{ date }}</h1>

    <ul>
      <li v-for="item in list" key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      date: "我也可以被渲染"
    };
  },
  // 普通版
  // asyncData() {
  //   return axios.get("https://cnodejs.org/api/v1/topics").then(res => {
  //     console.log(res.data.data);
  //     return {
  //       msg: "hello nuxt.js",
  //       list: res.data.data
  //     };
  //   });
  // }
  // 异步版
  async asyncData() {
    const {
      data: { data: list }
    } = await axios.get("https://cnodejs.org/api/v1/topics");
    console.log(list.data);
    return {
      msg: "hello nuxt.js",
      list
    };
  }
};
</script>

<style></style>
