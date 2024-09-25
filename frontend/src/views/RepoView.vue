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
        <div v-for="repo in langRepoList" :key="repo.id" class="my-4 pe-3">
          <a :href="repo.html_url" class="text-lg" target="_blank">{{ repo.full_name }}</a>
          <div class="flex justify-between">
            <p><span class="text-xs pl-2">&#11088; </span>{{ repo.stargazers_count }}</p>
            <p class="text-sm text-right italic pl-2">
              {{ repo.created_at.replace('T', ' ').replace('Z', '') }}
            </p>
          </div>
          <p class="text-sm pl-2 text-ellipsis line-clamp-2">{{ repo.description }}</p>
        </div>
      </template>
    </RepoList>
  </div>
</template>
