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
import { Vue, Component } from "vue-property-decorator";
@Component
export default class PageIndex extends Vue {
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
</script>
