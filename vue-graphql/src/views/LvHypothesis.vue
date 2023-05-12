<template>
    <div class="node">
        <h2 class="title">
            Hypothesis
        </h2>
        <p>
            It should be possible to fork a Laravel App and add GraphQL superpowers 
            using a library like <a href="https://github.com/rebing/graphql-laravel" 
                                    target="_blank" 
                                    class="text-link">
                                      rebing/graphql-laravel
                                  </a>. 
            
        </p>
        <p>
          This would offer a single GraphQL API endpoint queryable by any decoupled 
            Vue, React or Vanilla JS app. Let’s call these <strong>micro-apps</strong>
        </p>
        <p>
            These are static and easy to deploy anywhere, needing no backend. 
            They get their data from GraphQL at runtime 
            with <a href="https://apollo.vuejs.org/" target="_blank" class="text-link">Vue Apollo</a>
        </p>
        <p>
            Micro-apps can be further composed into a mix of old and new components 
            to create a the next frontend iteration. This new app can even contain 
            a mix of Vue and React micro-apps with a an approach 
            like <a href="https://single-spa.js.org/" target="_blank" class="text-link">single-spa</a>
        </p>
        <p>
            Importantly; the existing Laravel app does <i>not</i> change. Existing code runs exactly as before. 
            Any routes using the integrated Laravel/Vue pattern will still work until they 
            can be individually ported to a new pattern over time
        </p>
        <p>
            At the point that none of the older integrated components are in use, porting is done
        </p>
        <p class="push">
          <RouterLink 
              to="/results" 
              class="button-link">
            Results
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
  .text-link{
    color: #134448;
    font-weight: bold;
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