<template>
  <div>
    用户名：<input type="name" /> 密码：<input type="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
const Cookie = require("js-cookie");
export default {
  methods: {
    login() {
      setTimeout(() => {
        const token = "alskdsajndkjasdkashdashdasashdaskhdasdasasdas";
        this.$store.commit("updataAuth", token);
        Cookie.set("token", token);
        this.$router.push("/");
      }, 1000);
    }
  }
};
</script>

<style></style>
