<script setup>
import Spinner from '../shared/Spinner.vue'
import Dates from './Dates.vue'
import Languages from './Languages.vue'
import Stars from './Stars.vue'
import { useRepoStore } from '@/stores/repo'

const repo = useRepoStore()
</script>

<template>
  <div id="sidebar">
    <h3 class="pb-3 mb-3">Filters</h3>
    <Languages />
    <hr class="borderm-b py-3 mb-3" />
    <Dates />
    <hr class="borderm-b py-3 mb-3" />
    <Stars />

    <button class="btn w-full mt-6" @click="repo.doSearch" :disabled="repo.loading">
      <Spinner v-if="repo.loading" />
      Search
    </button>
  </div>
</template>

<style scoped>
#sidebar {
  @apply bg-gray-200 basis-[15rem] p-3 pt-6;
}
</style>
