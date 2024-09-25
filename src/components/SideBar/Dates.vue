<script setup>
import { useRepoStore } from '@/stores/repo'
import { storeToRefs } from 'pinia'

const repo = useRepoStore()
const { startDate, endDate } = storeToRefs(repo)
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
