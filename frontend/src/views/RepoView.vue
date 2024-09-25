<script setup>
import RepoList from '@/components/RepoList.vue'
import { useRepoStore } from '@/stores/repo'

const repo = useRepoStore()

console.log(repo.results)
</script>

<template>
  <h3 class="pb-3 mb-3">Main Page</h3>
  <div>
    <!-- <div v-for="langRepoList in repo.results" :key="langRepoList[0].language">{{ repo }}</div> -->
    <RepoList v-for="langRepoList in repo.results" :key="langRepoList[0].language">
      <template #heading>
        {{ langRepoList[0].language }}
      </template>
      <template #repositories>
        <div v-for="repo in langRepoList" :key="repo.id">
          {{ repo.name }}
        </div>
      </template>
    </RepoList>
  </div>
</template>
