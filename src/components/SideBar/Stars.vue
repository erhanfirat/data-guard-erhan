<script setup>
import { ref } from 'vue'

const minStars = ref(100)
</script>

<template>
  <label>
    Min stars count
    <input type="number" v-model="minStars" />
  </label>
</template>

<style scoped>
</style>
