<template>
  <div>
    <h1>goods page</h1>
    <p>获取查询参数id:{{ $route.query.id }}</p>
    <p>获取查询参数sort:{{ $route.query.sort }}</p>
    <nuxt-link to="/">index</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
