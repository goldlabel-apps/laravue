<template>
    <div>
      ## Hypothesis

It should be possible to fork existing Laravel App and add GraphQL superpowers using a library like **[rebing/graphql-laravel](https://github.com/rebing/graphql-laravel)**. This would offer a single GraphQL API endpoint queryable by any decoupled Vue, React or Vanilla JS app. Let’s call these **micro-apps**. 

These are static and easy to deploy anywhere, needing no backend. They get their data from GraphQL at runtime with  **[Vue Apollo](https://apollo.vuejs.org/)** 

Micro-apps can be further composed into a mix of old and new components to create a the next frontend iteration. This new app can even contain a mix of Vue and React micro-apps with a an approach like [single-spa](https://single-spa.js.org/)

Importantly; the existing Laravel app does _not_ change. Existing code runs exactly as before. Any routed using the integrated Laravel/Vue pattern will still work until they can be individually ported to a new pattern over time

At the point that none of the older integrated components are in use, porting is done
    </div>
</template>
