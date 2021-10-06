<template>
  <div class="container">
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/fade">Fade</nuxt-link></li>
        <li><nuxt-link to="/bounce">Bounce</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

nav a {
  color: inherit;
  text-decoration: none;
}

a.nuxt-link-exact-active {
  color: #00c58e;
}

main {
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
/* 过度开始前和过度结束后隐藏 */
.page-enter,
.page-leave-to {
  opacity: 0;
}
/* 过度激活状态显示 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}


</style>
