<template>
  <div class="container">
    <h1>layout page</h1>
    <nav class="nav">
      <ul>
        <!-- <NuxtLink to="/">Home</NuxtLink> -->
        <li><span :class="{ active: active }" @click="go('/')">Home</span></li>
        <!-- <NuxtLink to="/parent">Parent</NuxtLink> -->
        <li>
          <span :class="{ active: active }" @click="go('/parent')">Parent</span>
        </li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    };
  },
  methods: {
    go(path) {
      this.active = !this.active;
      this.$router.push({ path });
    }
  }
};
</script>

<style scope>
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

img {
  margin-bottom: 1rem;
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
.nuxt-link-exact-active,
.active {
  color: #00c58e;
}
</style>
