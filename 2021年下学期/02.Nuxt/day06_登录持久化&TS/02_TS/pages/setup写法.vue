<template>
  <div>
    <div class="home">
      <h1>count:{{ count }}</h1>
      <button @click="increment">加</button>
      <button @click="decrement">减</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    return {
      count,
      increment,
      decrement
    };
  }
};
</script>

<style></style>
