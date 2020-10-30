<template>
  <div>
    <button @click="addData">点我出现+1</button>
    <button @click="getDate">定时+1</button>
    <div>{{ name }}</div>
    <div>
      <h3>{{ aconst }}</h3>
    </div>
    <div>getter{{ get }}</div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  // name: "App",

  // HelloWorld
  methods: {
    ...mapMutations(["addData"]),
    ...mapActions(["getDate"])
  },
  computed: {
    ...mapState(["name", "aconst"]),
    ...mapGetters(["get"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
