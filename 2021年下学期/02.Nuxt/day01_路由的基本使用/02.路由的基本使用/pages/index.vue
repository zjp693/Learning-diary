<template>
  <div class="home">
    <div><h1>hello 一看便知道上面是嵌套路由</h1></div>
    Home page<br />
    <h1>下面便是路由传参 点点试试看</h1>
    <nuxt-link to="/about">页面跳转go about</nuxt-link><br />
    <nuxt-link to="/goods?id=100&sort=apple">查询参数goods</nuxt-link><br />
    <nuxt-link to="/good/100">路径查询一个参数good</nuxt-link><br />
    <nuxt-link to="/good/200/100">路径查询二个参数good</nuxt-link>
  </div>
</template>

<script>
export default {
  // 使用指定的布局文件 否则就使用default
  // layout: "blog"
};
</script>

<style scoped></style>
