import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { useToast } from 'vue-toast-notification'

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

  const $toast = useToast()

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
    let queryStr = ''
    if (minStars.value) {
      queryStr += `stars:>=${minStars.value} `
    }
    if (selectedLangs.value.length) {
      queryStr += `language:${selectedLangs.value.map((l) => l.value).toString()} `
    }
    if (startDate.value && endDate.value) {
      queryStr += `created:${startDate.value.toISOString().split('T')[0]}..${endDate.value.toISOString().split('T')[0]} `
    } else if (startDate.value) {
      queryStr += `created:>${startDate.value.toISOString().split('T')[0]}`
    } else if (endDate.value) {
      queryStr += `created:<${endDate.value.toISOString().split('T')[0]}`
    }

    api
      .get('/search-repos', {
        params: {
          q: queryStr
        }
      })
      .then((res) => {
        // clear previous search results
        results.value = {}
        // classify repos by programming language
        res.data.items.forEach((repo) => {
          if (results.value[repo.language]) {
            results.value[repo.language].push(repo)
          } else {
            results.value[repo.language] = [repo]
          }
        })
        fetched.value = true
        $toast.success(`Data fetched successfully!`)
      })
      .catch((err) => {
        console.log('err > ', err)
        $toast.error(`A problem occured while fetching data: ${err.message}`)
      })
      .finally(() => {
        loading.value = false
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
