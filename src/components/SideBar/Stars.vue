<script setup>
import { useRepoStore } from '@/stores/repo'
import { storeToRefs } from 'pinia'

const repo = useRepoStore()
const { minStars } = storeToRefs(repo)
</script>

<template>
  <label>
    Min stars count
    <input type="number" v-model="minStars" />
  </label>
</template>

<style scoped></style>
