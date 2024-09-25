import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRepoStore = defineStore('repo', () => {
  const langs = ref([])
  const startDate = ref()
  const endDate = ref()
  const minStars = ref(0)
  const results = ref([])

  const doSearch = () => {}

  return { langs, startDate, endDate, minStars, results, doSearch }
})
