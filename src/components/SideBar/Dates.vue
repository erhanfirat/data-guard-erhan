<script setup>
import { ref } from 'vue'

const startInitial = new Date()
startInitial.setMonth(startInitial.getMonth() - 1)

const startDate = ref(startInitial)
const endDate = ref(new Date())
</script>

<template>
  <label>
    from
    <VueDatePicker v-model="startDate" :enable-time-picker="false"></VueDatePicker>
  </label>
  <label>
    to
    <VueDatePicker v-model="endDate" :enable-time-picker="false"></VueDatePicker>
  </label>
</template>

<style scoped></style>
