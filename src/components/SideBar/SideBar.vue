<script setup>
import Languages from './Languages.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div id="sidebar">
    <h3 class="borderm-b pb-3 mb-3">Filters</h3>
    <Languages />
  </div>
</template>

<style scoped>
#sidebar {
  @apply bg-gray-200 basis-[15rem] p-3 pt-6;
}
</style>
