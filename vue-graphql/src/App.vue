<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppTitle from './components/AppTitle.vue'
</script>

<template>
  <header>
    <a href="/?reset">
      <img 
        alt="Laravue " 
        class="logo" 
        src="@/assets/logo.svg" 
        width="75" 
        height="75" 
      />
    </a>
    <AppTitle msg="Laravue" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/story">
          Story
        </RouterLink>
        <RouterLink to="/overview">
          Overview
        </RouterLink>
      </nav>
      
    </div>
  </header>
  <RouterView />
</template>


