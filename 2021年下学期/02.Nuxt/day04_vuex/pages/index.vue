<template>
  <div class="box">
    <h1>{{ $store.state.counter }}</h1>
    <!-- <h2>{{ counter }}</h2> -->
    <button @click="increment(20)">同步加</button>
    <button @click="asyncIncrement(10)">异步加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["count"])
  },
  methods: {
    // mutatios(payload) {
    //   this.$stores.commit("mutatios", payload);
    // }
    ...mapMutations(["increment"]),
    ...mapActions(["asyncIncrement"])
  }
};
</script>

<style></style>
