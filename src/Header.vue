<script setup>
import sha256 from 'crypto-js/sha256'
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar/SideBar.vue'

const hashedEmail = sha256('erhanfirat@gmail.com')
// Step 2: Construct the Gravatar URL.
const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}`
// Step 3: Set the image source to the Gravatar URL.
document.getElementById('gravatar-image').src = gravatarUrl
</script>

<template>
  <header class="">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <div class="user-info">
      <img />
      <h4>Erhan FIRAT</h4>
      <h5>Software Developer</h5>
    </div>
  </header>
</template>
