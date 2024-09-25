<script setup>
import RepoList from '@/components/RepoList.vue'
import { useRepoStore } from '@/stores/repo'

const repo = useRepoStore()

console.log(repo.results)
</script>

<template>
  <h3 class="pb-3 mb-3">Repositories</h3>
  <div class="repos-container flex flex-wrap gap-3">
    <!-- <div v-for="langRepoList in repo.results" :key="langRepoList[0].language">{{ repo }}</div> -->
    <RepoList v-for="langRepoList in repo.results" :key="langRepoList[0].language">
      <template #heading>
        {{ langRepoList[0].language || 'Not have a language' }}
      </template>
      <template #repositories>
        <div v-for="repo in langRepoList" :key="repo.id" class="my-3">
          <a :href="repo.html_url">{{ repo.full_name }}</a>
          <p class="text-sm">{{ repo.description }}</p>
          <p class="text-sm">{{ repo.created_at.replace('T', ' ').replace('Z', '') }}</p>
          <p><span class="text-sm">&#11088; </span>{{ repo.stargazers_count }}</p>
        </div>
      </template>
    </RepoList>
  </div>
</template>
