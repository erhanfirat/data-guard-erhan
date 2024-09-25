import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useRepoStore = defineStore('repo', () => {
  // States *******************
  const selectedLangs = ref([])

  const startInitial = new Date()
  startInitial.setMonth(startInitial.getMonth() - 1)

  const startDate = ref(startInitial)
  const endDate = ref(new Date())

  const minStars = ref(0)
  const results = ref([])

  // Actions *******************

  function selectLang(lang) {
    selectedLangs.value.push(lang)
  }

  function deselectLang(lang) {
    selectedLangs.value.splice(selectedLangs.value.indexOf(lang), 1)
  }

  function doSearch() {
    api.get('/search-repos?q=Q').then((res) => {
      console.log('repo response > ', res.data)
    })
  }

  return {
    programmingLangs,
    selectedLangs,
    startDate,
    endDate,
    minStars,
    results,
    selectLang,
    deselectLang,
    doSearch
  }
})

export const programmingLangs = [
  { label: 'Assembly', value: 'Assembly' },
  { label: 'C', value: 'C' },
  { label: 'C++', value: 'C++' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Go', value: 'Go' },
  { label: 'Java', value: 'Java' },
  { label: 'Kotlin', value: 'Kotlin' },
  { label: 'LINQ', value: 'LINQ' },
  { label: 'Phyton', value: 'Phyton' },
  { label: '.Net', value: '.Net' },
  { label: 'C#', value: 'C#' }
]
