
# Laravue

> Explores how easy and well Laravel and Vue/React work together

```bash
cd <working-dir>
git clone https://github.com/listingslab-software/laravue
cd laravue
npm run
```

#### Laravel background

Laravel is a backend framework that provides all of the features you need to build modern web applications, such as routing, validation, caching, queues, file storage, and more. However, we believe it's important to offer developers a beautiful full-stack experience, including powerful approaches for building your application's frontend.

There are two primary ways to tackle frontend development when building an application with Laravel, and which approach you choose is determined by whether you would like to build your frontend by leveraging PHP or by using JavaScript frameworks such as Vue and React

#### [Using Vue/React](https://laravel.com/docs/10.x/frontend#using-vue-react)

Although it's possible to build modern frontends using Laravel and Livewire, many developers still prefer to leverage the power of a JavaScript framework like Vue or React. This allows developers to take advantage of the rich ecosystem of JavaScript packages and tools available via NPM

However, without additional tooling, pairing Laravel with Vue or React would leave us needing to solve a variety of complicated problems such as client-side routing, data hydration, and authentication

Client-side routing is often simplified by using opinionated Vue / React frameworks such as Nuxt and Next; however, data hydration and authentication remain complicated and cumbersome problems to solve when pairing a backend framework like Laravel with these frontend frameworks

In addition, developers are left maintaining two separate code repositories, often needing to coordinate maintenance, releases, and deployments across both repositories. While these problems are not insurmountable, we don't believe it's a productive or enjoyable way to develop applications

#### [Starter Kits](https://laravel.com/docs/10.x/frontend#inertia-starter-kits)

If you would like to build your frontend using Inertia and Vue / React, you can leverage our Breeze or Jetstream starter kits to jump-start your application's development. Both of these starter kits scaffold your application's backend and frontend authentication flow using Inertia, Vue / React, Tailwind, and Vite so that you can start building your next big idea