<template>
  <div class="home">
    <h1>Hello Nuxts!</h1>
    <h3 v-tooltip="msg">鼠标悬浮显示提示</h3>

    <ul>
      <li v-for="item in topics" :key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>

    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hell Nuxters"
    };
  },
  async asyncData({ app }) {
    // console.log(app);
    // const {
    //   data: { data: topics }
    // } = await app.$api.getTopice("/topics");
    // console.log(topics);
    // return {
    //   topics
    // };
    const {
      data: { data: topics }
    } = await app.$api.getTopice("/topics");
    return { topics };
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.home {
  width: 400px;
  margin: 100px auto;
}
</style>
