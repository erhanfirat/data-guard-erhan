<script setup>
import { ref } from 'vue'

const startDate = ref(new Date())
const endDate = ref(new Date())
</script>

<template>
  <label>
    from
    <input type="date" v-model="startDate" />
  </label>
  <label>
    to
    <input type="date" v-model="endDate" />
  </label>
</template>

<style scoped>
.lang-tag {
  @apply rounded bg-gray-300 py-1 ps-4 pe-7 relative;
}
</style>
