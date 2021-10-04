<template>
  <div>
    <h1>parent页面（二级路由）</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/parent/child1">child1</nuxt-link></li>
        <li><nuxt-link to="/parent/child2">child2</nuxt-link></li>
      </ul>
    </nav>
    <nuxt-child />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
