# ![screenshot](./vue-graphql/src/assets/icon32.svg) Laravue

> Investigates porting monolithic Laravel/Vue apps to more scaleable, more manageable, more modern architecture


## Hypothesis

It should be possible to fork existing Laravel App and add GraphQL superpowers using a library like **[rebing/graphql-laravel](https://github.com/rebing/graphql-laravel)**. This would offer a single GraphQL API endpoint queryable by any decoupled Vue, React or Vanilla JS app. Let’s call these **micro-apps**. 

These are static and easy to deploy anywhere, needing no backend. They get their data from GraphQL at runtime with  **[Vue Apollo](https://apollo.vuejs.org/)** 

Micro-apps can be further composed into a mix of old and new components to create a the next frontend iteration. This new app can even contain a mix of Vue and React micro-apps with a an approach like [single-spa](https://single-spa.js.org/)

Importantly; the existing Laravel app does _not_ change. Existing code runs exactly as before. Any routed using the integrated Laravel/Vue pattern will still work until they can be individually ported to a new pattern over time

At the point that none of the older integrated components are in use, porting is done


## Results

1. First I had a look at the viability of using Laravel as a GraphQL API. It's entirely possible, and well documented. It's non-trivial, though. Meaning getting a proper Proof of concept up might take a little more time. The prototype is in  `/laravel-graphql/`. It nearly works :)

So continue the investigation I swapped to using just any old GraphQL API. Specifically, [mocki.io](https://mocki.io/graphql)

2. Used [create-vue](https://github.com/vuejs/create-vue) to bootstrap a new micro-app into the `/vue-graphql` directory

3. Tested deployability of microapps on Firebase [🔓 listingslab-laravue.web.app](https://listingslab-laravue.web.app)

4. Used Apollo to grab some data from the mock api