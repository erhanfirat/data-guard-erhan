import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRepoStore = defineStore('repo', () => {
  const langs = ref([])

  const startInitial = new Date()
  startInitial.setMonth(startInitial.getMonth() - 1)

  const startDate = ref(startInitial)
  const endDate = ref(new Date())

  const minStars = ref(0)
  const results = ref([])

  function doSearch() {}

  return { langs, startDate, endDate, minStars, results, doSearch }
})
