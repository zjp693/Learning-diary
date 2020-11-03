<template>
  <h1>item</h1>
</template>

<script>
// import {mapActions} from "vuex"
export default {
  created(){
    this.$store.dispatch("getData");
  }
};
</script>

<style></style>
