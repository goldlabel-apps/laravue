# ![screenshot](./vue-graphql/src/assets/icon32.svg) Laravue

> Investigates porting monolithic Laravel/Vue apps to more scaleable, more manageable, more modern architecture


## Hypothesis

It should be possible to fork existing Laravel App and add GraphQL superpowers using a library like **[rebing/graphql-laravel](https://github.com/rebing/graphql-laravel)**. This would offer a single GraphQL API endpoint queryable by any decoupled Vue, React or Vanilla JS app. Let’s call these **micro-apps**. 

These are static and easy to deploy anywhere. They need no backend because they get their data from GraphQL 
queries at runtime using  **[Apollo Client](https://www.apollographql.com)** 

Micro-apps can be further composed into a mix of old and new components to create a new frontend space. This can even contain a mix of Vue and React micro-apps

Importantly, the existing Laravel app does not change. All existing code runs exactly as before. Any features using the current using the integrated pattern will still work until they can be individually ported to the new pattern over time. 

At the point that none of the older integrated components are in use, porting is done


## Results

[🔓 Example Vue Micro App](https://listingslab-laravue.web.app)