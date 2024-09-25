<script setup>
import Dates from './Dates.vue'
import Languages from './Languages.vue'
import Stars from './Stars.vue'

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
    <hr class="borderm-b py-3 mb-3" />
    <Dates />
    <hr class="borderm-b py-3 mb-3" />
    <Stars />
    <hr class="borderm-b py-3 mb-3" />
    <button class="btn w-full">Search</button>
  </div>
</template>

<style scoped>
#sidebar {
  @apply bg-gray-200 basis-[15rem] p-3 pt-6;
}
</style>
