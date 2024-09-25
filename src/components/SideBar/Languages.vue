<script setup>
import { reactive } from 'vue'
import VueSelect from 'vue3-select-component'

const langs = [
  { label: 'C', value: 'C' },
  { label: 'C++', value: 'C++' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Go', value: 'Go' },
  { label: 'Java', value: 'Java' },
  { label: 'Phyton', value: 'Phyton' },
  { label: '.Net', value: '.Net' }
]
const selectedLangs = reactive([])

const selectLang = (e) => {
  selectedLangs.push(e)
}

const deselectLang = (e) => {
  selectedLangs.splice(selectedLangs.indexOf(e), 1)
}
</script>

<template>
  <div class="flex gap-2 flex-wrap pb-3">
    <div class="lang-tag" v-for="lang in selectedLangs" :key="lang">
      {{ lang.label }}
      <strong
        class="absolute text-lg text-red-800 cursor-pointer alert-del right-[5px] top-0"
        @click="deselectLang(lang)"
        >&times;</strong
      >
    </div>
  </div>

  <VueSelect
    v-model="selected"
    :options="langs.filter((l) => !selectedLangs.includes(l))"
    @option-selected="selectLang"
    placeholder="Search languages..."
  />
</template>

<style scoped>
.lang-tag {
  @apply rounded bg-gray-300 py-1 ps-4 pe-7 relative;
}
</style>
