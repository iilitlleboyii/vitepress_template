<template>
  <div style="margin-bottom: 20px">
    <p>这是一个demo-button</p>
    <p>count: {{ count }}</p>
    <button @click="count++" class="my-button">点我加1</button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const count = ref(0)
</script>

<style scoped>
.my-button {
  font-size: 16px;
  padding: 4px 8px;
  background-color: red;
  color: white;
  border-radius: 6px;
}
</style>
