<script setup lang="ts">
  defineProps<{
    msg?: string
  }>()
</script>

<template>
  <div class="node">
    <h2 class="title">
      In Agile, everything starts with a story
    </h2>
    <p>
      , the story of this project could be described as;
    </p>
    <p>
      "As a developer I want to investigate possible approaches to porting 
      tightly integrated Laravel/Vue App into a more scaleable, 
      more manageable and more modern architecture"
    </p>
    <p class="push">
      <RouterLink 
          to="/hypothesis" 
          class="button-link">
        Hypothesis
      </RouterLink>
    </p>

  </div>
</template>

<style scoped>
  h2 {
    font-weight: normal
  }
  .push{
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .button-link{
    padding: 6px;
    background: #4C979C;
    border-radius: 4px;
    color: #FFF;
    text-transform: uppercase;
  }
  .button-link:hover{
    text-decoration: none;
    color: #FFF;
    background: #134448;
  }
  .node .title{
    padding-top: 24px;
    padding-bottom: 24px;
  }
  @media (min-width: 800px) {
  }
</style>