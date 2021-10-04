<template>
  <div>
    <h1>good/_cid/_gid page</h1>
    <p>获取查询参数cid:{{ $route.params.cid }}</p>
    <p>获取查询参数gid:{{ $route.params.gid }}</p>
    <nuxt-link to="/">index</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
