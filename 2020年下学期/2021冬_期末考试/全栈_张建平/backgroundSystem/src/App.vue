<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.el-scrollbar__thumb {
  display: none;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
