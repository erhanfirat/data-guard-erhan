<script setup>
import sha256 from 'crypto-js/sha256'

const hashedEmail = sha256('erhanfirat@gmail.com')
const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}`
</script>

<template>
  <header>
    <div class="flex gap-3 items-center">
      <div class="flex items-center gap-3">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        <h1>
          DataGuard <br />
          Challenge
        </h1>
      </div>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div class="user-info">
      <img class="avatar" :src="gravatarUrl" />
      <div>
        <h4>Erhan FIRAT</h4>
        <h5>Software Developer</h5>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  @apply bg-gray-100 leading-6 flex flex-col justify-between items-center gap-3 p-3 bg-gray-800 text-gray-50 font-medium;
  @apply md:flex-row;
}

.user-info {
  @apply flex items-center gap-6;
}

.avatar {
  @apply rounded-full w-[3rem];
}

.logo {
  @apply w-[40px];
}
</style>
