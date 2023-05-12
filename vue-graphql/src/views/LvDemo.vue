<script lang="ts">
import gql from 'graphql-tag'
export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`query {
      hello
    }`,
  },
}
</script>

<template>
    <div class="node">
        

        <h2 class="title">
            Aplollo GraphQL Demo
        </h2>

        <div>{{ hello }}</div>
        <p>
          Vue microapp uses Apollo to query the <a
                class="text-link"
                title="mocki" 
                href="https://mocki.io/graphql"
                target="_blank"
                rel="noreferrer">
                mocki GraphQL API
              </a> at this 
          endpoint; https://api.mocki.io/v2/c4d7a195/graphql
        </p>
        
        
        
        <p>
          <code>
              {<br />
              &nbsp;&nbsp;todos  {<br />
              &nbsp;&nbsp;&nbsp;&nbsp;id<br />
              &nbsp;&nbsp;&nbsp;&nbsp;description<br />
              &nbsp;&nbsp;&nbsp;&nbsp;done<br />
              &nbsp;&nbsp}<br />
              }<br /><br />
            </code>
        </p>

        <p>
          We can test the query works and see what the result should look like 
          by using the GraphQL Playground. <a
            class="text-link"
            title="mocki" 
            href="https://api.mocki.io/playground?endpoint=https://api.mocki.io/v2/c4d7a195/graphql"
            target="_blank"
            rel="noreferrer">
            GraphQL Playground
          </a>
        </p>


        <!-- 
          <p>
            Click the button to load the following query asynchronously;
          </p>
          <p class="push">
            <a href="?doit-doit" class="button-link">
              Query mocki API
            </a>
        </p> -->
        
    </div>
</template>

<style scoped>
  h2 {
    font-weight: normal
  }
  img{
    width: 100%;
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