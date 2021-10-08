<template>
  <div class="container">
    <p>Hello {{ name }}!</p>
    <NuxtLink to="/about">
      Go to /about
    </NuxtLink>

    <div>
      <ul>
        <li v-for="item in $store.state.topics" :key="item.id">
          <nuxt-link :to="`/detail?id=${item.id}`">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({ name: "world" });
      }, 1000);
    });
  },
  async fetch({ $api, store }) {
    // console.log(store);
    const {
      data: { data: topic }
    } = await $api.getTopic("/topics");
    // console.log(topic);
    store.commit("updateTopics", topic);
  }
};
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
