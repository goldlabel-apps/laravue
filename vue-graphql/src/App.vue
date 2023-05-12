<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppTitle from './components/AppTitle.vue'
</script>

<template>
  <header>
    <AppTitle msg="Laravue" />
    <div>
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


