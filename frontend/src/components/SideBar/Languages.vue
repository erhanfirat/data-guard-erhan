<script setup>
import { programmingLangs, useRepoStore } from '@/stores/repo'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import VueSelect from 'vue3-select-component'
const repo = useRepoStore()
const { selectedLangs } = storeToRefs(repo)
const selected = ref(null)
</script>

<template>
  <div class="flex gap-2 flex-wrap pb-3">
    <div class="lang-tag" v-for="lang in selectedLangs" :key="lang">
      {{ lang.label }}
      <strong
        class="absolute text-lg text-red-800 cursor-pointer alert-del right-[5px] top-0"
        @click="repo.deselectLang(lang)"
        >&times;</strong
      >
    </div>
  </div>

  <VueSelect
    v-model="selected"
    :options="programmingLangs.filter((l) => !selectedLangs.includes(l))"
    @option-selected="
      (l) => {
        repo.selectLang(l)
        selected = null
      }
    "
    placeholder="Search languages..."
  />
</template>

<style scoped>
.lang-tag {
  @apply rounded bg-gray-300 py-1 ps-4 pe-7 relative;
}
</style>
