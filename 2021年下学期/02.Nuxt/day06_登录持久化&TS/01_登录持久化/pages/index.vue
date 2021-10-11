<template>
  <div>
    <div v-if="!$store.state.auth">
      please
      <nuxt-link to="/login">login</nuxt-link>
    </div>
    <div v-else>
      你已登录，可以访问
      <nuxt-link to="/my">
        <p>
          <button @click="logout">退出登录</button>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
const Cookie = require("js-cookie");
export default {
  methods: {
    logout() {
      setTimeout(() => {
        this.$store.commit("updateAuth", null);
        Cookie.remove("token");
      }, 1000);
    }
  }
};
</script>
