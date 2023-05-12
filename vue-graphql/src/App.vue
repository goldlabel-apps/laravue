<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="laravue">
    <div class="lv-wrapper">
      
      <nav class="nav-bar">
        
        <RouterLink 
          to="/"
          class="logo-link">
          <img class="logo" src="./assets/icon32.svg"/>
        </RouterLink>

        <RouterLink 
          to="/?start" 
          class="nav-link"
        >
          Start
        </RouterLink>

        <RouterLink 
          to="/hypothesis" 
          class="nav-link">
          Hypothesis
        </RouterLink>

        <RouterLink 
          to="/results" 
          class="nav-link">
          Results
        </RouterLink>

        <RouterLink 
          to="/conclusion" 
          class="nav-link">
          Conclusion
        </RouterLink>
        
      </nav>

      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
  .laravue{
    margin: auto;
    height: 100vh;
    max-width: 450px;
    
  }
  .laravue a {
    text-decoration: none;
  }
  .laravue h2 {
    font-weight: normal;
  }
  .lv-wrapper{
    margin-top: 8px;
    /* border-top: 1px solid #4C979C; */
    border-bottom: 1px dotted #4C979C;
    padding-top: 8px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
  }
  .logo{
    width: 32px;
    height: 32px;
    margin-top: -4px;
  }
  .logo-link{
    margin-right: 16px;
  }
  .nav-link{
    padding: 6px;
    margin-right: 8px;
    border: 1px solid #4C979C;
    border-radius: 4px;
    color: #134448;
    text-transform: uppercase;
  }
  .nav-link:hover{
    color: #FFF;
    background: #4C979C;
  }
  .nav-bar{
    background: #FFF;
  }
  
  @media (min-width: 500px) {
  }
</style>