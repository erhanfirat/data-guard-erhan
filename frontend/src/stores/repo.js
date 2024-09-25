import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useRepoStore = defineStore('repo', () => {
  // States *******************

  const selectedLangs = ref([])
  const loading = ref(false)
  const fetched = ref(false)

  const startInitial = new Date()
  startInitial.setMonth(startInitial.getMonth() - 1)

  const startDate = ref(startInitial)
  const endDate = ref(new Date())

  const minStars = ref(0)
  const results = ref({})

  // Actions *******************

  function selectLang(lang) {
    selectedLangs.value.push(lang)
    fetched.value = false
  }

  function deselectLang(lang) {
    selectedLangs.value.splice(selectedLangs.value.indexOf(lang), 1)
    fetched.value = false
  }

  function doSearch() {
    loading.value = true
    api
      .get('/search-repos', {
        params: {
          q: `stars:>=${minStars.value} language:${selectedLangs.value.map((l) => l.value).toString()} created:>${startDate.value.toISOString().split('T')[0]} AND created:<${endDate.value.toISOString().split('T')[0]} `
        }
      })
      .then((res) => {
        console.log('repo response > ', res.data)
        // clear previous search results
        results.value = {}
        res.data.items.forEach((repo) => {
          if (results.value[repo.language]) {
            results.value[repo.language].push(repo)
          } else {
            results.value[repo.language] = [repo]
          }
        })

        console.log('results final > ', results)
        loading.value = false
        fetched.value = true
      })
  }

  return {
    selectedLangs,
    startDate,
    endDate,
    minStars,
    loading,
    fetched,
    results,
    selectLang,
    deselectLang,
    doSearch
  }
})

// Statics ********************

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
