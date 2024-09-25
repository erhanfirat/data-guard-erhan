<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar/SideBar.vue'
import PageHeader from './PageHeader.vue'
</script>

<template>
  <PageHeader />
  <main class="flex-1 flex">
    <SideBar />
    <div id="page-content">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  @apply bg-gray-100 leading-6 flex justify-start items-center p-3 bg-gray-800 text-gray-50 font-medium;
}

#page-content {
  @apply flex-1 p-3 pt-6;
}

.logo {
  @apply w-[40px];
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
