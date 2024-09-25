<script setup>
import Filters from './Filters.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div id="sidebar">
    <Filters />
  </div>
</template>

<style scoped>
#sidebar {
  @apply bg-gray-200 basis-[15rem] p-3;
}
</style>
