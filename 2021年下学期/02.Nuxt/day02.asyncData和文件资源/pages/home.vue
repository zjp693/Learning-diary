<template>
  <div class="home">
    <h1>首页</h1>
    <div v-if="rendering == 'server'">
      <p>
        页面渲染在 <strong>{{ rendering }}</strong>
      </p>
      <p>
        页面刷新后渲染在 <strong>{{ rendering }}</strong>
      </p>
    </div>
    <p v-if="rendering == 'client'">页面跳转后渲染在{{ rendering }}</p>
    <h3>刷新页面后再看效果</h3>
    <nuxt-link to="/about">跳转到关于页面后再看效果</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      rendering: process.server ? "server" : "client"
    };
  }
};
</script>
