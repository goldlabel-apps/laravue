<template>
    <div class="node">
        <h2 class="title">
            Results
        </h2>

        <ol>
          <li>
            <p><a
              class="text-link"
              title="create-vue" 
              href="https://github.com/listingslab-software/laravue/tree/master/vue-graphql"
              target="_blank"
              rel="noreferrer">
              create-vue
            </a> bootstraps micro-app into the `/vue-graphql` directory</p>
            <a
              class="text-link"
              title="laravue" 
              href="https://github.com/listingslab-software/laravue/tree/master/vue-graphql"
              target="_blank"
              rel="noreferrer">
              /vue-graphql
            </a>
          </li>
          <li>
            <p>To use Laravel as a GraphQL API is definately possible. Examples are well documented. 
            But it is non-trivial, meaning a proper Proof of concept might take more time. 
            A nearly working prototype is in </p>
            <a
              class="text-link"
              title="github" 
              href="https://github.com/listingslab-software/laravue/tree/master/laravel-graphql"
              target="_blank"
              rel="noreferrer">
              /laravel-graphql
            </a>
          </li>
          <li>
            To workaround the lack of GraphQL API, I swapped to using any old GraphQL API. Specifically, . 
            <p>
                <a
                class="text-link"
                title="mocki" 
                href="https://mocki.io/graphql"
                target="_blank"
                rel="noreferrer">
                mocki.io
              </a>
              &nbsp;| &nbsp;
              <a
                class="text-link"
                title="mocki" 
                href="https://api.mocki.io/playground?endpoint=https://api.mocki.io/v2/c4d7a195/graphql"
                target="_blank"
                rel="noreferrer">
                playground
              </a>. 
            </p>
            <code>
              {<br />
              &nbsp;&nbsp;todos  {<br />
              &nbsp;&nbsp;&nbsp;&nbsp;id<br />
              &nbsp;&nbsp;&nbsp;&nbsp;description<br />
              &nbsp;&nbsp}<br />
              }<br /><br />
            </code>
          </li>
          
          <li>
            <p>Deployed microapp top Firebase</p>
            <a
              class="text-link"
              title="listingslab laravue" 
              href="https://listingslab-laravue.web.app"
              target="_blank"
              rel="noreferrer">
              🔓 listingslab-laravue.web.app
            </a>
          </li>

          <li>
            Used Apollo to grab some data from the mock api
          </li>
          
        </ol>

        <p class="push">
          <RouterLink 
              to="/conclusion" 
              class="button-link">
            Conclusion
          </RouterLink>
        </p>

    </div>
</template>

<style scoped>
  h2 {
    font-weight: normal
  }
  li{
    padding: 8px;
  }
  .text-link{
    color: #134448;
    font-weight: bold;
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